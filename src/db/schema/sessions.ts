import { pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core";
import { users } from "./users";

export const sessions = pgTable("sessions", {
  id: uuid("id").primaryKey(),
  expires: timestamp("expires"),
  sessionToken: text("session_token"),
  userId: text("user_id").references(() => users.id),
});
