import { $, component$, useSignal } from "@builder.io/qwik";
import { Form, routeAction$, routeLoader$ } from "@builder.io/qwik-city";
import { CompanyInfo } from "./company-info";
import JobInfo from "./job-info";
import { PlaceOrder } from "./place-order";
import { type Session } from "@auth/core/types";
import { prisma } from "~/lib/prisma";

export const useCompany = routeLoader$(async ({ redirect, sharedMap }) => {
  const session: Session | null = sharedMap.get("session");
  if (!session?.user?.email) {
    throw redirect(303, "/login");
  }
  const user = await prisma.user.findUnique({
    where: {
      email: session.user.email,
    },
    select: {
      company: true,
    },
  });

  return user?.company;
});

export const useCreateJob = routeAction$(() => {});
export default component$(() => {
  const company = useCompany();
  const currentTab = useSignal(company.value ? 2 : 1);

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
