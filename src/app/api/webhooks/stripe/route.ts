import { NextRequest, NextResponse } from "next/server";
import type Stripe from "stripe";
import { getStripe } from "@/utils/server/stripe";
import { getDb } from "@/utils/server/mongodb";
import {
  saveCheckoutSession,
  saveRenewalInvoice,
} from "@/utils/server/payments";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

/**
 * payments collection shape:
 * {
 *   _id, stripeSessionId (unique), stripeCustomerId?,
 *   stripePaymentIntentId?, stripeSubscriptionId?,
 *   planId, planTitle, amount (in cents), currency,
 *   mode: "subscription" | "payment",
 *   status: "paid" | "canceled" | "failed",
 *   customerName, customerEmail,
 *   invoicePdfUrl?, hostedInvoiceUrl?,
 *   linkedApplicationId?,
 *   createdAt, lastRenewedAt?
 * }
 */

async function handleSubscriptionDeleted(subscription: Stripe.Subscription) {
  const db = await getDb();
  await db
    .collection("payments")
    .updateOne(
      { stripeSubscriptionId: subscription.id },
      { $set: { status: "canceled" } },
    );
}

export async function POST(request: NextRequest) {
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;
  if (!webhookSecret) {
    return NextResponse.json(
      { error: "Missing STRIPE_WEBHOOK_SECRET" },
      { status: 500 },
    );
  }

  const signature = request.headers.get("stripe-signature");
  if (!signature) {
    return NextResponse.json({ error: "Missing signature" }, { status: 400 });
  }

  const rawBody = await request.text();

  let event: Stripe.Event;
  try {
    event = getStripe().webhooks.constructEvent(
      rawBody,
      signature,
      webhookSecret,
    );
  } catch (err) {
    console.error("Stripe webhook signature verification failed:", err);
    return NextResponse.json({ error: "Invalid signature" }, { status: 400 });
  }

  try {
    switch (event.type) {
      case "checkout.session.completed":
        await saveCheckoutSession(event.data.object as Stripe.Checkout.Session);
        break;
      case "invoice.payment_succeeded":
        await saveRenewalInvoice(event.data.object as Stripe.Invoice);
        break;
      case "customer.subscription.deleted":
        await handleSubscriptionDeleted(
          event.data.object as Stripe.Subscription,
        );
        break;
      default:
        break;
    }

    return NextResponse.json({ received: true }, { status: 200 });
  } catch (err) {
    console.error(`Error handling ${event.type}:`, err);
    return NextResponse.json({ error: "Handler error" }, { status: 500 });
  }
}
