import { $, component$, useSignal } from "@builder.io/qwik";
import { Form } from "@builder.io/qwik-city";
import { CompanyInfo } from "./company-info";
import JobInfo from "./job-info";
import { PlaceOrder } from "./place-order";

export default component$(() => {
  const currentTab = useSignal(3);

  const handleChangeTab = $((tab: number) => {
    currentTab.value = tab;
  });
  return (
    <Form class="w-full min-h-screen h-full relative">
      {currentTab.value === 1 && <CompanyInfo onTabChange={handleChangeTab} />}
      {currentTab.value === 2 && <JobInfo onTabChange={handleChangeTab} />}
      {currentTab.value === 3 && <PlaceOrder onTabChange={handleChangeTab} />}
    </Form>
  );
});
