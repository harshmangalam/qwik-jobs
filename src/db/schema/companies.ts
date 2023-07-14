import { pgTable, text, timestamp, uuid, varchar } from "drizzle-orm/pg-core";

export const companies = pgTable("companies", {
  id: uuid("id").primaryKey(),
  name: varchar("name", { length: 40 }),
  avatar: text("avatar"),
  website: text("website"),
  twitter: varchar("twitter", { length: 15 }),
  locations: text("locations").array(),
  createdAt: timestamp("created_at"),
  updatedAt: timestamp("updated_at"),
});
