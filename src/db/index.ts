import postgres from "postgres";
import { drizzle } from "drizzle-orm/postgres-js";

const queryClient = postgres(import.meta.env.DATABASE_URL);
export const db = drizzle(queryClient);
