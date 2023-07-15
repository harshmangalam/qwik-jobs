import { pgTable, text, timestamp } from "drizzle-orm/pg-core";
import { type InferModel } from "drizzle-orm";

export const verificationTokens = pgTable("verification_tokens", {
  identifier: text("identifier"),
  token: text("token"),
  expires: timestamp("expires"),
});

export type VerificationToken = InferModel<typeof verificationTokens, "select">;
export type NewVerificationToken = InferModel<
  typeof verificationTokens,
  "insert"
>;
