import { pgTable, text, timestamp, uuid, varchar } from "drizzle-orm/pg-core";

export const users = pgTable("users", {
  id: uuid("id").primaryKey(),
  name: varchar("name", { length: 40 }),
  email: varchar("email", { length: 320 }),
  emailVerified: timestamp("email_verified"),
  image: text("image"),
});
