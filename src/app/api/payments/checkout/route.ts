import { NextRequest, NextResponse } from "next/server";
import { getStripe } from "@/utils/server/stripe";
import { resolveStripePriceId } from "@/utils/server/stripePrices";
import { getPlanById } from "@/app/data/plans";

export async function POST(request: NextRequest) {
  try {
    const { planId } = await request.json();

    const plan = getPlanById(planId);
    if (!plan) {
      return NextResponse.json({ error: "Unknown plan" }, { status: 400 });
    }

    const priceId = resolveStripePriceId(plan.id);
    const siteUrl =
      process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/+$/, "") ??
      "http://localhost:3000";

    const stripe = getStripe();
    const session = await stripe.checkout.sessions.create({
      mode: plan.mode,
      line_items: [{ price: priceId, quantity: 1 }],
      success_url: `${siteUrl}/pricing/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${siteUrl}/pricing?canceled=1`,
      billing_address_collection: "auto",
      allow_promotion_codes: true,
      metadata: {
        planId: plan.id,
        planTitle: plan.title,
      },
      ...(plan.mode === "payment"
        ? {
            invoice_creation: {
              enabled: true,
              invoice_data: {
                description: plan.title,
                footer: "Ви благодариме што избравте TradingLab.mk!",
              },
            },
            payment_intent_data: {
              metadata: {
                planId: plan.id,
                planTitle: plan.title,
              },
            },
          }
        : {
            subscription_data: {
              metadata: {
                planId: plan.id,
                planTitle: plan.title,
              },
            },
          }),
    });

    if (!session.url) {
      return NextResponse.json(
        { error: "Failed to create Stripe Checkout session" },
        { status: 500 },
      );
    }

    return NextResponse.json({ url: session.url }, { status: 200 });
  } catch (error) {
    console.error("Error creating Stripe checkout session:", error);
    const message =
      error instanceof Error ? error.message : "Failed to create session";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
