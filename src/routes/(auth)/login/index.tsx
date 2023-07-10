import { component$ } from "@builder.io/qwik";
import { OauthLogin } from "../oauth-logins";
import { Form, Link } from "@builder.io/qwik-city";
import { TextInput } from "~/components/ui/data-input/text-input";
import { Button } from "~/components/ui/actions/button";

export default component$(() => {
  return (
    <div>
      <section class="text-center">
        <div class="font-medium text-2xl lg:text-4xl mt-4 lg:mt-8">
          Log in to your account
        </div>
        <div class="mt-4 text-muted lg:text-lg">
          Enter your credentials or use your favourite social provider to access
        </div>
        <OauthLogin />
      </section>

      <section class="mt-6">
        <Form>
          <TextInput type="email" label="Email" name="email" id="email" />
          <div class="flex flex-col gap-1">
            <TextInput
              type="password"
              label="Password"
              name="password"
              id="password"
            />
            <Link href="/forgot-password" class="link text-sm self-end">
              Forgot your password?
            </Link>
          </div>
          <div class="mt-4">
            <Button type="submit" fullWidth>
              Log in
            </Button>
          </div>
        </Form>
      </section>

      <section class="mt-6 text-center">
        Don't have an account?{" "}
        <Link
          href="/register"
          class="link font-semibold inline-flex items-center gap-1"
        >
          <span> Reginter now</span>
          <iconify-icon
            width={24}
            height={24}
            icon="formkit:arrowright"
          ></iconify-icon>
        </Link>
      </section>
    </div>
  );
});
