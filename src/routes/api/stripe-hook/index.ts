import { type RequestHandler } from "@builder.io/qwik-city";
import type Stripe from "stripe";
import { stripe } from "~/lib/stripe";

export const onRequest: RequestHandler = async ({
  request,
  error,
  headers,
  env,
  json,
}) => {
  const sig = headers.get("stripe-signature") as string;
  const endpointSecret = env.get("STRIPE_ENDPOINT_SECRET") as string;
  const bodyBuffer = await request.arrayBuffer();
  const uint8Array = new Uint8Array(bodyBuffer);
  const textDecoder = new TextDecoder("utf-8");
  const decodedString = textDecoder.decode(uint8Array);

  let event: Stripe.Event | null = null;
  try {
    event = stripe.webhooks.constructEvent(decodedString, sig, endpointSecret);
  } catch (err: any) {
    error(500, `Stripe webhook Error: ${err.message}`);
  }

  switch (event?.type) {
    case "checkout.session.async_payment_failed":
      const checkoutSessionAsyncPaymentFailed = event.data.object;

      // Then define and call a function to handle the event checkout.session.async_payment_failed

      break;
    case "checkout.session.async_payment_succeeded":
      const checkoutSessionAsyncPaymentSucceeded = event.data.object;
      // Then define and call a function to handle the event checkout.session.async_payment_succeeded
      break;
    case "checkout.session.completed":
      const checkoutSessionCompleted = event.data.object;
      // Then define and call a function to handle the event checkout.session.completed
      break;
    case "checkout.session.expired":
      const checkoutSessionExpired = event.data.object;
      // Then define and call a function to handle the event checkout.session.expired
      break;
    // ... handle other event types
    default:
      console.log(`Unhandled event type ${event.type}`);
  }
  json(200, {
    success: true,
  });
};
