import { component$ } from "@builder.io/qwik";
import { Form, routeAction$, z, zod$ } from "@builder.io/qwik-city";
import { Button } from "~/components/ui/actions/button";
import { TextInput } from "~/components/ui/data-input/text-input";
import { prisma } from "~/lib/prisma";

export const useSubscriber = routeAction$(
  async ({ email, name }, { fail, redirect }) => {
    const subscriber = await prisma.subscriber.findUnique({
      where: {
        email,
      },
    });

    if (subscriber) {
      return fail(400, {
        error: "Email already added to subscibers list",
      });
    }

    await prisma.subscriber.create({
      data: {
        name,
        email,
      },
    });

    throw redirect(302, "/");
  },
  zod$({
    name: z.string().nonempty("Please enter your name"),
    email: z
      .string()
      .email("Please enter your correct email address")
      .nonempty("Please enter your email address"),
  })
);
export default component$(() => {
  const action = useSubscriber();
  return (
    <div class="py-10 max-w-3xl w-full mx-auto">
      <div class="font-semibold text-3xl lg:text-5xl">
        Get Qwik.js jobs right to your inbox
      </div>
      <div class="text-lg text-gray-600 mt-4">
        Subscribe and get the best of our listings right to your e-mail. Issued
        weekly.
      </div>
      {action.value?.error && (
        <div class="toast toast-bottom">
          <div class="alert alert-error">
            <iconify-icon
              width={24}
              height={24}
              icon="fluent-mdl2:alert-solid"
            ></iconify-icon>
            <span>{action.value.error}</span>
          </div>
        </div>
      )}
      <Form action={action} class="mt-8 grid grid-cols-1 gap-2">
        <TextInput
          label="Name"
          placeholder="Your name"
          id="name"
          name="name"
          error={action.value?.fieldErrors?.name?.[0]}
        />

        <TextInput
          name="email"
          id="email"
          label="Email"
          placeholder="Enter your e-mail"
          error={action.value?.fieldErrors?.email?.[0]}
        />
        <div class="pt-4">
          <Button
            loading={action.isRunning}
            type="submit"
            colorScheme="btn-primary"
          >
            Subscribe
          </Button>
        </div>
      </Form>
    </div>
  );
});
