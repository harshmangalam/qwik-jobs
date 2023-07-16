import { type Session } from "@auth/core/types";
import { component$ } from "@builder.io/qwik";
import {
  Form,
  routeAction$,
  routeLoader$,
  z,
  zod$,
} from "@builder.io/qwik-city";
import { Button } from "~/components/ui/actions/button";
import { TextInput } from "~/components/ui/data-input/text-input";
import { prisma } from "~/lib/prisma";

export const useUser = routeLoader$(async ({ sharedMap, redirect }) => {
  const session: Session | null = sharedMap.get("session");
  if (!session?.user?.email) {
    throw redirect(303, "/login");
  }
  return prisma.user.findUnique({
    where: {
      email: session.user.email,
    },
  });
});
export const useUpdateUser = routeAction$(
  async ({ email, name }, { redirect, sharedMap }) => {
    const session: Session | null = sharedMap.get("session");
    if (!session?.user?.email) {
      return redirect(303, "/login");
    }
    await prisma.user.update({
      where: {
        email: session.user.email,
      },
      data: {
        email,
        name,
      },
    });

    redirect(303, "/account/user/");
  },
  zod$({
    name: z.string(),
    email: z.string(),
  })
);
export default component$(() => {
  const user = useUser();
  const action = useUpdateUser();
  return (
    <div>
      <Form action={action}>
        <TextInput
          value={user.value?.name ?? ""}
          label="Name"
          id="name"
          name="name"
        />
        <TextInput
          label="Email"
          id="email"
          name="email"
          value={user.value?.email ?? ""}
        />
        <div class="mt-6">
          <Button
            loading={action.isRunning}
            type="submit"
            colorScheme="btn-primary"
          >
            Save changes
            <iconify-icon
              width={24}
              height={24}
              icon="formkit:arrowright"
            ></iconify-icon>
          </Button>
        </div>
      </Form>
    </div>
  );
});
