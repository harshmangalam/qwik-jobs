import { component$ } from "@builder.io/qwik";
import { Form } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <div class="py-10 max-w-3xl mx-auto">
      <div class="font-semibold text-2xl font-display">
        Let's begin with your company information
      </div>
      <div class="text-lg text-gray-600 mt-4">
        Let us know about your organization.
      </div>
      <Form class="mt-8"></Form>
    </div>
  );
});
