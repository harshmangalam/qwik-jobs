import { component$ } from "@builder.io/qwik";
import { RadioGroup } from "~/components/ui/data-input/radio-group";

export const EmploymentModel = component$(() => {
  const options = [
    {
      label: "Remote",
      value: "remote",
    },
    {
      label: "On-site",
      value: "onsite",
    },
    {
      label: "Hybrid",
      value: "hybrid",
    },
  ];
  return (
    <div>
      <RadioGroup
        name="employmentModel"
        label="Employment model"
        data={options}
      />
    </div>
  );
});
