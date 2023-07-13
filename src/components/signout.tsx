import { component$ } from "@builder.io/qwik";
import { Form } from "@builder.io/qwik-city";
import { useAuthSignout } from "~/routes/plugin@auth";
import { Button } from "./ui/actions/button";

export default component$(() => {
  const signOut = useAuthSignout();
  return (
    <Form action={signOut} class="w-full mt-2">
      <input type="hidden" name="callbackUrl" value="/" />
      <Button
        type="submit"
        fullWidth
        size="btn-sm"
        colorScheme="btn-error"
        outline
      >
        Logout
      </Button>
    </Form>
  );
});
