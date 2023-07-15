import { pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core";
import { users } from "./users";
import { type InferModel } from "drizzle-orm";

export const sessions = pgTable("sessions", {
  id: uuid("id").primaryKey(),
  expires: timestamp("expires"),
  sessionToken: text("session_token"),
  userId: text("user_id").references(() => users.id),
});

export type Session = InferModel<typeof sessions, "select">;
export type NewSession = InferModel<typeof sessions, "insert">;
