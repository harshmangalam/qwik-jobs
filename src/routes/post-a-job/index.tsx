import { component$, useSignal } from "@builder.io/qwik";
import { Form } from "@builder.io/qwik-city";
import { Button } from "~/components/ui/actions/button";
import { CompanyInfo } from "./company-info";
import JobInfo from "./job-info";
import { PlaceOrder } from "./place-order";

export default component$(() => {
  const currentTab = useSignal(2);
  const tabs = [
    {
      level: 1,
      name: "Company details",
    },
    {
      level: 2,
      name: "Job information",
    },
    {
      level: 3,
      name: "Place order",
    },
  ];
  return (
    <div class="py-10 max-w-3xl w-full mx-auto min-h-screen h-full flex flex-col gap-y-8">
      <ul class="steps w-full justify-start">
        {tabs.map(({ level, name }) => (
          <li key={level} class="step step-primary">
            {name}
          </li>
        ))}
      </ul>
      <Form class="mt-8 grid grid-cols-1 gap-3">
        {currentTab.value === 1 && <CompanyInfo />}
        {currentTab.value === 2 && <JobInfo />}
        {currentTab.value === 3 && <PlaceOrder />}
      </Form>
    </div>
  );
});
