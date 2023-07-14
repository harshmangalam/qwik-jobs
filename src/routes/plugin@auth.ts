import { serverAuth$ } from "@builder.io/qwik-auth";
import GitHub from "@auth/core/providers/github";
import type { Provider } from "@auth/core/providers";
import { DrizzleAdapter } from "~/adapters/drizzle";
import { db } from "~/db";

export const { onRequest, useAuthSession, useAuthSignin, useAuthSignout } =
  serverAuth$(({ env }) => ({
    secret: env.get("AUTH_SECRET"),
    trustHost: true,
    adapter: DrizzleAdapter(db),
    providers: [
      GitHub({
        clientId: env.get("GITHUB_ID")!,
        clientSecret: env.get("GITHUB_SECRET")!,
      }),
    ] as Provider[],
  }));
