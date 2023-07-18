import { type QRL, component$ } from "@builder.io/qwik";
import { Logo } from "~/components/logo";
import { RadioGroup } from "~/components/ui/data-input/radio-group";
import { Textarea } from "~/components/ui/data-input/text-area";
import { TextInput } from "~/components/ui/data-input/text-input";
import { useCompany } from ".";

interface JobInfoProps {
  onTabChange: QRL<(tab: number) => {}>;
}
export default component$((props: JobInfoProps) => {
  const company = useCompany();
  const { onTabChange } = props;
  const workType = [
    {
      label: "Full-time",
      value: "fulltime",
    },
    {
      label: "Part-time",
      value: "parttime",
    },
    {
      label: "Freelance",
      value: "freelance",
    },
    { label: "Contract", value: "contract" },
  ];
  const expLevel = [
    {
      label: "Lead",
      value: "lead",
    },
    {
      label: "Senior",
      value: "senior",
    },
    {
      label: "Medium",
      value: "medium",
    },
    {
      label: "Junior",
      value: "junior",
    },
  ];
  return (
    <div class="container max-w-2xl w-full mx-auto py-8">
      <div class="mb-8">
        <Logo />
      </div>
      <div>
        <div class="font-semibold text-2xl font-display">
          Describe your opening
        </div>
        <div class="text-lg text-gray-600 mt-4">
          Provide as many details as possible. Jobs can be edited after
          publishing anytime.
        </div>
      </div>

      <div class="mt-4">
        {company.value && (
          <TextInput
            name="company"
            id="company"
            label="Company"
            disabled
            value={company.value.name}
          />
        )}

        <TextInput name="title" id="title" label="Title" />
        <RadioGroup name="workType" label="Work type" data={workType} />
        <RadioGroup
          name="experienceLevel"
          label="Experience level"
          data={expLevel}
        />
        <Textarea
          name="description"
          label="Description"
          id="description"
          rows={3}
        />
      </div>
      <div class="mt-8 flex justify-end gap-4">
        {!company.value && (
          <button type="button" onClick$={() => onTabChange(1)} class="btn">
            <iconify-icon
              width={24}
              height={24}
              icon="formkit:arrowleft"
            ></iconify-icon>
            Prev
          </button>
        )}
        <button
          type="button"
          onClick$={() => onTabChange(3)}
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
