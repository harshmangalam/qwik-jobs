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
          Hiring starts here
        </div>
        <div class="mt-4 lg:text-lg">Create an account and post a job!</div>
        <OauthLogin />
      </section>

      <section class="mt-6">
        <Form>
          <TextInput type="text" label="Name" name="name" id="name" />
          <TextInput type="email" label="Email" name="email" id="email" />

          <TextInput
            type="password"
            label="Password"
            name="password"
            id="password"
          />

          <TextInput
            type="password"
            label="Confirm your password"
            name="confirmPassword"
            id="confirmPassword"
          />
          <div class="flex items-center gap-4 mt-6">
            <input type="checkbox" class="toggle toggle-primary" />
            <p class="text-sm">
              I agree with the <a class="link font-semibold">terms of use</a>
            </p>
          </div>
          <div class="mt-8">
            <Button type="submit" fullWidth>
              Register
            </Button>
          </div>
        </Form>
      </section>

      <section class="mt-6 text-center">
        Already have an account?{" "}
        <Link
          href="/login"
          class="link font-semibold inline-flex items-center gap-1"
        >
          <span>Login now</span>
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
