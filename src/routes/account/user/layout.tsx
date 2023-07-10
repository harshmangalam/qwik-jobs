import { Slot, component$ } from "@builder.io/qwik";
import { PageHeader } from "../page-header";
import { Tab } from "./tab";

export default component$(() => {
  const tabs = [
    {
      name: "User profile",
      link: "/account/user/",
    },
    {
      name: "Password",
      link: "/account/user/password/",
    },
    {
      name: "Account deletion",
      link: "/account/user/delete/",
    },
  ];
  return (
    <div>
      <PageHeader title="User settings" />
      <div class="tabs mt-8">
        {tabs.map((tab) => (
          <Tab key={tab.name} {...tab} />
        ))}
        <div class="tab tab-bordered flex-1 "></div>
      </div>
      <div class="mt-10">
        <Slot />
      </div>
    </div>
  );
});
