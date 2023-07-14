import type { Adapter, AdapterUser } from "@auth/core/adapters";
import { eq } from "drizzle-orm";
import { type PostgresJsDatabase } from "drizzle-orm/postgres-js";
import { accounts } from "~/db/schema/accounts";
import { type NewUser, users } from "~/db/schema/users";
import * as schema from "~/db/schema";
export function DrizzleAdapter(db: PostgresJsDatabase<typeof schema>): Adapter {
  return {
    async createUser(user: Omit<AdapterUser, "id">) {
      const data = await db
        .insert(users)
        .values(user as NewUser)
        .returning();
      return data[0] as AdapterUser;
    },
    async getUser(id) {
      const data = await db.select().from(users).where(eq(users.id, id));
      return data[0] as AdapterUser;
    },
    async getUserByEmail(email) {
      const data = await db.select().from(users).where(eq(users.email, email));
      return data[0] as AdapterUser;
    },
    async getUserByAccount({ providerAccountId }) {
      const data = await db.query.accounts.findFirst({
        where: eq(accounts.providerAccountId, providerAccountId),
        with: {
          users: true,
        },
      });

      return data?.users ? (data.users as AdapterUser) : null;
    },
    async updateUser({ id, ...data }) {
      const user = await db
        .update(users)
        .set(data)
        .where(eq(users.id as any, id))
        .returning();

      return user[0] as AdapterUser;
    },
    async deleteUser(userId) {
      const data = await db
        .delete(users)
        .where(eq(users.id, userId))
        .returning();
      return data[0] as AdapterUser;
    },
    async linkAccount(account) {
      return;
    },
    async unlinkAccount({ providerAccountId, provider }) {
      return;
    },
    async createSession({ sessionToken, userId, expires }) {
      return;
    },
    async getSessionAndUser(sessionToken) {
      return;
    },
    async updateSession({ sessionToken }) {
      return;
    },
    async deleteSession(sessionToken) {
      return;
    },
    async createVerificationToken({ identifier, expires, token }) {
      return;
    },
    async useVerificationToken({ identifier, token }) {
      return;
    },
  };
}
