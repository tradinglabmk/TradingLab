import { getPlanById } from "@/app/data/plans";

const PRICE_ENV_BY_PLAN: Record<string, string> = {
  group_monthly: "STRIPE_PRICE_GROUP_MONTHLY",
  group_3m: "STRIPE_PRICE_GROUP_3MONTHS",
  group_6m: "STRIPE_PRICE_GROUP_6MONTHS",
  signals_monthly: "STRIPE_PRICE_SIGNALS_MONTHLY",
  test_1eur: "STRIPE_PRICE_TEST_1EUR",
};

export function resolveStripePriceId(planId: string): string {
  const plan = getPlanById(planId);
  if (!plan) throw new Error(`Unknown plan: ${planId}`);

  const envName = PRICE_ENV_BY_PLAN[planId];
  const priceId = envName ? process.env[envName] : undefined;

  if (!priceId) {
    throw new Error(`Missing Stripe Price ID env var: ${envName}`);
  }
  return priceId;
}
