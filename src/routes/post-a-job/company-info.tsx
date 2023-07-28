import { type QRL, component$ } from "@builder.io/qwik";
import { ImageUpload } from "~/components/image-upload";
import { Logo } from "~/components/logo";
import { TextInput } from "~/components/ui/data-input/text-input";

type CompanyInfoProps = {
  onTabChange: QRL<(tab: number) => {}>;
};
export const CompanyInfo = component$((props: CompanyInfoProps) => {
  const { onTabChange } = props;

  return (
    <div class="container max-w-2xl w-full mx-auto py-8">
      <div class="mb-8">
        <Logo />
      </div>
      <div class="font-semibold text-2xl font-display">
        Let's begin with your company information
      </div>
      <div class="text-lg text-gray-600 mt-4">
        Let us know about your organization.
      </div>
      <div>
        <TextInput
          label="Name"
          placeholder="ACME Info..."
          id="companyName"
          name="name"
        />
        <ImageUpload label="Avatar" name="companyAvatar" id="avatar" />
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <TextInput
            label="Website"
            placeholder="https://website.com"
            id="website"
            name="companyWebsite"
          />
          <TextInput
            label="Twitter"
            placeholder="@twitter"
            id="companyTwitter"
            name="twitter"
          />
        </div>
        <TextInput
          name="locations"
          id="companyLocations"
          label="Locations (seperate by comma)"
          placeholder="Add locations"
        />
      </div>

      <div class="mt-8 flex justify-end">
        <button
          type="button"
          onClick$={() => onTabChange(2)}
          class="btn btn-primary"
        >
          Next
          <iconify-icon
            width={24}
            height={24}
            icon="formkit:arrowright"
          ></iconify-icon>
        </button>
      </div>
    </div>
  );
});
