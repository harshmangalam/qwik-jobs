import type {
  Adapter,
  AdapterAccount,
  AdapterSession,
  AdapterUser,
  VerificationToken,
} from "@auth/core/adapters";
import { eq } from "drizzle-orm";
import { type PostgresJsDatabase } from "drizzle-orm/postgres-js";
import { accounts } from "~/db/schema/accounts";
import { type NewUser, users } from "~/db/schema/users";
import { type NewAccount } from "~/db/schema/accounts";
import { sessions, type NewSession } from "~/db/schema/sessions";
import * as schema from "~/db/schema";
import {
  type NewVerificationToken,
  verificationTokens,
} from "~/db/schema/verificationToken";
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
      const data = await db
        .insert(accounts)
        .values(account as NewAccount)
        .returning();

      return data[0] as AdapterAccount;
    },
    async unlinkAccount({ providerAccountId }) {
      const data = await db
        .delete(accounts)
        .where(eq(accounts.providerAccountId, providerAccountId))
        .returning();
      return data[0] as AdapterAccount;
    },
    async createSession(session) {
      const data = await db.insert(sessions).values(session as NewSession);
      return data[0] as AdapterSession;
    },
    async updateSession(session) {
      const data = await db
        .update(sessions)
        .set(session)
        .where(eq(sessions.sessionToken, session.sessionToken))
        .returning();

      return data[0] as AdapterSession;
    },
    async deleteSession(sessionToken) {
      const data = await db
        .delete(sessions)
        .where(eq(sessions.sessionToken, sessionToken))
        .returning();

      return data[0] as AdapterSession;
    },
    async createVerificationToken(verificationToken) {
      const data = await db
        .insert(verificationTokens)
        .values(verificationToken as NewVerificationToken)
        .returning();
      return data[0] as VerificationToken;
    },
    async useVerificationToken({ identifier }) {
      try {
        const data = await db
          .delete(verificationTokens)
          .where(eq(verificationTokens.identifier, identifier))
          .returning();
        return data[0] as VerificationToken;
      } catch (error) {
        return null;
      }
    },
  };
}
