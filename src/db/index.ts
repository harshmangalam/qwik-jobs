import postgres from "postgres";
import { drizzle } from "drizzle-orm/postgres-js";
import * as schema from "./schema";
const queryClient = postgres(import.meta.env.DATABASE_URL);
export const db = drizzle(queryClient, {
  schema,
});
