import { component$ } from "@builder.io/qwik";
import { RadioGroup } from "~/components/ui/data-input/radio-group";
import { Textarea } from "~/components/ui/data-input/text-area";
import { TextInput } from "~/components/ui/data-input/text-input";

export default component$(() => {
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
    <div>
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
    </div>
  );
});
