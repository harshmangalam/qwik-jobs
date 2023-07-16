import { type Session } from "@auth/core/types";
import { component$ } from "@builder.io/qwik";
import { Form, routeAction$, z, zod$ } from "@builder.io/qwik-city";
import { Button } from "~/components/ui/actions/button";
import { TextInput } from "~/components/ui/data-input/text-input";
import { prisma } from "~/lib/prisma";
import { hashPassword } from "~/utils/password";

export const useUpdatePassword = routeAction$(
  async ({ confirmPassword, password }, { redirect, fail, sharedMap }) => {
    if (password !== confirmPassword) {
      return fail(400, {
        error: "Password and confirm password must be same",
      });
    }

    const session: Session = sharedMap.get("session");

    if (!session.user?.email) {
      throw redirect(303, "/login");
    }
    const hashedPass = await hashPassword(password);
    await prisma.user.update({
      where: {
        email: session.user.email,
      },
      data: {
        password: hashedPass,
      },
    });

    throw redirect(303, "/account/password");
  },
  zod$({
    password: z.string().nonempty("Field is required"),
    confirmPassword: z.string().nonempty("Field is required"),
  })
);
export default component$(() => {
  const action = useUpdatePassword();
  return (
    <div>
      <Form action={action}>
        <TextInput
          type="password"
          label="Password"
          id="password"
          name="password"
          error={action.value?.fieldErrors?.password?.[0]}
        />
        <TextInput
          label="Confirm password"
          id="confirmPassword"
          name="confirmPassword"
          type="password"
          error={action.value?.fieldErrors?.confirmPassword?.[0]}
        />
        <div class="mt-6">
          <Button
            loading={action.isRunning}
            type="submit"
            colorScheme="btn-primary"
          >
            Change password
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
