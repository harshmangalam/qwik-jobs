import { component$ } from "@builder.io/qwik";
import { RadioGroup } from "~/components/ui/data-input/radio-group";

export const EmploymentModel = component$(() => {
  const options = ["Remote", "On-site", "Hybrid"];
  return (
    <div>
      <RadioGroup
        name="employmentModel"
        label="Employment model"
        data={options.map((o) => ({
          label: o,
          value: o,
        }))}
      />
    </div>
  );
});
