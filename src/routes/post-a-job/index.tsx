import { $, component$, useSignal } from "@builder.io/qwik";
import { Form } from "@builder.io/qwik-city";
import { CompanyInfo } from "./company-info";
import JobInfo from "./job-info";
import { PlaceOrder } from "./place-order";
import { Logo } from "~/components/logo";

export default component$(() => {
  const currentTab = useSignal(1);
  const handleChangeTab = $((tab: number) => (currentTab.value = tab));
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
    <div class="divide-y w-full min-h-screen h-full flex flex-col">
      <nav class="navbar sticky top-0 bg-base-100 shadow">
        <div>
          <Logo />
        </div>

        <ul class="steps w-full justify-start">
          {tabs.map(({ level, name }) => (
            <li key={level} class="step step-primary">
              {name}
            </li>
          ))}
        </ul>
      </nav>
      <Form class="grid grid-cols-1 gap-3 flex-1">
        {currentTab.value === 1 && (
          <CompanyInfo onTabChange={handleChangeTab} />
        )}
        {currentTab.value === 2 && <JobInfo onTabChange={handleChangeTab} />}
        {currentTab.value === 3 && <PlaceOrder onTabChange={handleChangeTab} />}
      </Form>
    </div>
  );
});
