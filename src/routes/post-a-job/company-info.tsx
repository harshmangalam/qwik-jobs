import { component$ } from "@builder.io/qwik";
import { ImageUpload } from "~/components/image-upload";
import { TextInput } from "~/components/ui/data-input/text-input";

export const CompanyInfo = component$(() => {
  return (
    <div>
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
    </div>
  );
});
