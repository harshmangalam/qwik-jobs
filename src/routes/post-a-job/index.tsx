import { $, component$, useSignal } from "@builder.io/qwik";
import {
  Form,
  routeAction$,
  routeLoader$,
  z,
  zod$,
} from "@builder.io/qwik-city";
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

export const useCreateJob = routeAction$(
  async (formData, { redirect, sharedMap }) => {
    const session: any = sharedMap.get("session");
    const {
      salaryCurrency,
      salaryRangeTo,
      salaryPeriod,
      salaryRangeFrom,
      locations,
      isFeatured,
      bringToTop,
      monthlyRenew,
      ...rest
    } = formData;

    await prisma.job.create({
      data: {
        ...rest,
        locations: locations.split(","),
        bringToTop: bringToTop == "on",
        isFeatured: isFeatured == "on",
        monthlyRenew: monthlyRenew == "on",
        salary: {
          salaryRangeFrom,
          salaryRangeTo,
          salaryCurrency,
          salaryPeriod,
        },
        user: {
          connect: {
            email: session?.user?.email,
          },
        },
      },
    });

    throw redirect(303, "/account/jobs");
  },
  zod$({
    title: z.string().nonempty(),
    jobType: z.string().nonempty(),
    experienceLevel: z.string().nonempty(),
    employmentModel: z.string().nonempty(),
    locations: z.string().nonempty(),
    salaryPeriod: z.string().nonempty(),
    salaryCurrency: z.string().nonempty(),
    salaryRangeFrom: z.string().nonempty(),
    salaryRangeTo: z.string().nonempty(),
    targetURL: z.string().nonempty(),
    description: z.string().nonempty(),
    isFeatured: z.string(),
    monthlyRenew: z.string(),
    bringToTop: z.string(),
  })
);
export default component$(() => {
  const company = useCompany();
  const currentTab = useSignal(company.value ? 2 : 1);
  const action = useCreateJob();

  const handleChangeTab = $((tab: number) => {
    currentTab.value = tab;
  });
  return (
    <Form action={action} class="w-full min-h-screen h-full relative">
      <div class={[currentTab.value === 1 ? "block" : "hidden"]}>
        <CompanyInfo onTabChange={handleChangeTab} />
      </div>

      <div class={[currentTab.value === 2 ? "block" : "hidden"]}>
        <JobInfo onTabChange={handleChangeTab} />
      </div>
      <div class={[currentTab.value === 3 ? "block" : "hidden"]}>
        <PlaceOrder onTabChange={handleChangeTab} />
      </div>
    </Form>
  );
});
