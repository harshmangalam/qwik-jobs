import { component$ } from "@builder.io/qwik";
import { Form } from "@builder.io/qwik-city";
import { ImageUpload } from "~/components/image-upload";
import { Button } from "~/components/ui/actions/button";
import { TextInput } from "~/components/ui/data-input/text-input";

export default component$(() => {
  return (
    <div class="">
      <div class="font-medium text-3xl">Your company</div>
      <div class="mt-2">Configure your company information</div>
      <Form class="mt-8 grid grid-cols-1 gap-3">
        <TextInput
          label="Name"
          placeholder="ACME Info..."
          id="name"
          name="name"
        />
        <ImageUpload label="Avatar" name="avatar" id="avatar" />
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
        <TextInput
          name="location"
          id="location"
          label="Location"
          placeholder="Add location"
        />
        <div class="flex justify-center pt-8">
          <Button type="submit" colorScheme="btn-primary">
            Save Changes
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
