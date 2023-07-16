import { type Session } from "@auth/core/types";
import { component$ } from "@builder.io/qwik";
import { Form, routeAction$ } from "@builder.io/qwik-city";
import { Button } from "~/components/ui/actions/button";
import { prisma } from "~/lib/prisma";

export const useDeleteAccount = routeAction$(
  async (_, { sharedMap, redirect }) => {
    try {
      const session: Session | null = sharedMap.get("session");
      if (!session?.user?.email) {
        throw redirect(303, "/login");
      }
      await prisma.user.delete({
        where: {
          email: session.user.email,
        },
      });

      throw redirect(303, "/");
    } catch (error) {
      console.log(error);
    }
  }
);
export default component$(() => {
  const action = useDeleteAccount();
  return (
    <div>
      <p class="prose text-lg">
        You are about to delete your account. Please be aware that this action
        cannot be undone. All your data (company, job postings or professional
        profile) will be permanently deleted.
      </p>
      <div class="mt-4">
        <Form action={action}>
          <Button
            type="submit"
            loading={action.isRunning}
            colorScheme="btn-error"
            outline
          >
            Yes delete my account
          </Button>
        </Form>
      </div>
    </div>
  );
});
