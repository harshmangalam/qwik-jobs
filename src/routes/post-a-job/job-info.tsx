import { component$ } from "@builder.io/qwik";
import { Logo } from "~/components/logo";
import { RadioGroup } from "~/components/ui/data-input/radio-group";
import { Textarea } from "~/components/ui/data-input/text-area";
import { TextInput } from "~/components/ui/data-input/text-input";
import { useCompany } from ".";
import { SalaryInput } from "./salary-input";
import { EmploymentModel } from "./employment-model";
import { Link } from "@builder.io/qwik-city";

export default component$(() => {
  const company = useCompany();

  const jobType = [
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

      <div class="mt-4 flex flex-col gap-y-4">
        <TextInput
          name="company"
          id="company"
          label="Company"
          disabled
          value={company.value.name}
        />

        <TextInput name="title" id="title" label="Title" />
        <RadioGroup name="jobType" label="Work type" data={jobType} />
        <RadioGroup
          name="experienceLevel"
          label="Experience level"
          data={expLevel}
        />
        <EmploymentModel />

        <TextInput name="targetURL" id="targetURL" label="Apply Target URL" />
        <TextInput
          name="locations"
          id="locations"
          label="Locations (seperated by comma)"
        />
        <SalaryInput />

        <Textarea
          name="description"
          label="Description"
          id="description"
          rows={3}
        />
      </div>
      <div class="mt-8 flex justify-end gap-4">
        <Link href="/post-a-job?tab=2" class="btn">
          Next
          <iconify-icon
            width={24}
            height={24}
            icon="formkit:arrowright"
          ></iconify-icon>
        </Link>
      </div>
    </div>
  );
});
