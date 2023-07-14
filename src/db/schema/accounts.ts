import { integer, pgTable, text, uuid } from "drizzle-orm/pg-core";
import { users } from "./users";
import { type InferModel } from "drizzle-orm";

export const accounts = pgTable("accounts", {
  id: uuid("id").primaryKey(),
  userId: text("user_id").references(() => users.id),
  type: text("type"),
  provider: text("type"),
  providerAccountId: text("provider_account_id"),
  refreshToken: text("refresh_token"),
  accessToken: text("access_token"),
  expiresAt: integer("expires_at"),
  tokenType: text("token_type"),
  scope: text("scope"),
  idToken: text("id_token"),
  sessionState: text("session_state"),
});

export type Account = InferModel<typeof accounts, "select">;
export type NewAccount = InferModel<typeof accounts, "insert">;
