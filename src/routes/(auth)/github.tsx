import { component$ } from "@builder.io/qwik";
import { Form } from "@builder.io/qwik-city";
import { useAuthSignin } from "../plugin@auth";
import { Button } from "~/components/ui/actions/button";

export const Github = component$(() => {
  const signIn = useAuthSignin();
  return (
    <Form action={signIn}>
      <input type="hidden" name="providerId" value="github" />
      <input
        type="hidden"
        name="options.callbackUrl"
        value="https://abf8-49-205-247-22.ngrok-free.app"
      />
      <Button type="submit" fullWidth outline>
        <iconify-icon width={24} height={24} icon="mdi:github"></iconify-icon>
        with Github
      </Button>
    </Form>
  );
});
