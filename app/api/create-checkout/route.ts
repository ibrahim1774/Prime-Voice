import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json().catch(() => ({}));
    const businessName: string = body.businessName || "";

    const session = await stripe.checkout.sessions.create({
      mode: "subscription",
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: "PrimeVoice AI Receptionist",
              description: businessName
                ? `AI Receptionist for ${businessName}`
                : "AI Receptionist — 24/7 call answering for your business",
            },
            unit_amount: 2900,
            recurring: { interval: "month" },
          },
          quantity: 1,
        },
      ],
      subscription_data: {
        trial_period_days: 3,
        metadata: { businessName },
      },
      success_url: "https://primehubagency.com/success-page-1",
      cancel_url:
        process.env.NEXT_PUBLIC_SITE_URL || "https://www.primevoiceai.org",
      metadata: { businessName },
    });

    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error("Stripe checkout error:", error);
    return NextResponse.json(
      { error: "Failed to create checkout session" },
      { status: 500 }
    );
  }
}
