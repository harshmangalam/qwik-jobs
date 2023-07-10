import { component$ } from "@builder.io/qwik";
import { Form } from "@builder.io/qwik-city";
import { Button } from "~/components/ui/actions/button";
import { TextInput } from "~/components/ui/data-input/text-input";

export default component$(() => {
  return (
    <div class="py-10 max-w-3xl w-full mx-auto">
      <div class="font-semibold text-3xl lg:text-5xl">
        Get Qwik.js jobs right to your inbox
      </div>
      <div class="text-lg text-gray-600 mt-4">
        Subscribe and get the best of our listings right to your e-mail. Issued
        weekly.
      </div>
      <Form class="mt-8 grid grid-cols-1 gap-3">
        <TextInput label="Name" placeholder="Your name" id="name" name="name" />

        <TextInput
          name="email"
          id="email"
          label="Email"
          placeholder="Enter your e-mail"
        />
        <div class="pt-4">
          <Button type="submit" colorScheme="btn-primary">
            Subscribe
          </Button>
        </div>
      </Form>
    </div>
  );
});
