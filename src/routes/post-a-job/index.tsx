import { component$ } from "@builder.io/qwik";
import { Form } from "@builder.io/qwik-city";
import { ImageUpload } from "~/components/image-upload";
import { TextInput } from "~/components/ui/data-input/text-input";

export default component$(() => {
  return (
    <div class="py-10 max-w-3xl w-full mx-auto">
      <div class="font-semibold text-2xl font-display">
        Let's begin with your company information
      </div>
      <div class="text-lg text-gray-600 mt-4">
        Let us know about your organization.
      </div>
      <Form class="mt-8 grid grid-cols-1 gap-3">
        <TextInput
          label="Name"
          placeholder="ACME Info..."
          id="name"
          name="name"
        />
        <ImageUpload label="Avatar" name="avatar" id="avatar" />
        <div class="grid grid-cols-2 gap-4">
          <TextInput
            label="Website"
            placeholder="https://website.com"
            id="website"
            name="website"
          />
          <TextInput
            label="Twitter"
            placeholder="@twitter"
            id="twitter"
            name="twitter"
          />
        </div>
      </Form>
    </div>
  );
});
