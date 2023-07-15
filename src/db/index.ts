import postgres from "postgres";
import { drizzle } from "drizzle-orm/postgres-js";
import { migrate } from "drizzle-orm/postgres-js/migrator";
import * as schema from "./schema";

const databaseURL = process.env.DATABASE_URL as string;
const queryClient = postgres(databaseURL);

export const db = drizzle(queryClient, {
  schema,
});

migrate(db, { migrationsFolder: "./drizzle" });
