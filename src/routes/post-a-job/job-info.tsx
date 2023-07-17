import { type QRL, component$ } from "@builder.io/qwik";
import { RadioGroup } from "~/components/ui/data-input/radio-group";
import { Textarea } from "~/components/ui/data-input/text-area";
import { TextInput } from "~/components/ui/data-input/text-input";

interface JobInfoProps {
  onTabChange: QRL<(tab: number) => {}>;
}
export default component$((props: JobInfoProps) => {
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
    <div class="container max-w-3xl mx-auto py-8">
      <div>
        <div class="font-semibold text-2xl font-display">
          Describe your opening
        </div>
        <div class="text-lg text-gray-600 mt-4">
          Provide as many details as possible. Jobs can be edited after
          publishing anytime.
        </div>
      </div>

      <div>
        <TextInput name="title" id="title" label="Title" />
        <RadioGroup name="workType" label="Work type" data={workType} />
        <RadioGroup name="workType" label="Experience level" data={expLevel} />
        <Textarea
          name="description"
          label="Description"
          id="description"
          rows={6}
        />
      </div>
      <div class="mt-8 flex justify-end gap-4">
        <button onClick$={() => onTabChange(1)} class="btn">
          <iconify-icon
            width={24}
            height={24}
            icon="formkit:arrowleft"
          ></iconify-icon>
          Prev
        </button>
        <button onClick$={() => onTabChange(3)} class="btn btn-primary">
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
