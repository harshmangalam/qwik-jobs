import { $, component$, useSignal } from "@builder.io/qwik";
import {
  Form,
  routeAction$,
  routeLoader$,
  z,
  zod$,
} from "@builder.io/qwik-city";

import JobInfo from "./job-info";
import { PlaceOrder } from "./place-order";
import { type Session } from "@auth/core/types";
import { prisma } from "~/lib/prisma";
import { stripe } from "~/lib/stripe";

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

  if (!user?.company) {
    throw redirect(302, "/account/company");
  }

  return user.company;
});

export const useCreateJob = routeAction$(
  async (formData, { redirect, sharedMap }) => {
    const session: Session | null = sharedMap.get("session");
    if (!session?.user?.email) {
      throw redirect(302, "/login");
    }
    const {
      salaryCurrency,
      basePostingPriceId,
      salaryRangeTo,
      salaryPeriod,
      salaryRangeFrom,
      locations,
      isFeatured,
      bringToTop,
      companyId,
      monthlyRenew,
      bringToTopPriceId,
      featuredPriceId,
      ...rest
    } = formData;
    const stripeSession = await stripe.checkout.sessions.create({
      success_url: "http://localhost:5432/post-a-job/success",
      cancel_url: "http://localhost:5432/account/jobs",
      line_items: [
        {
          price: basePostingPriceId,
          quantity: 1,
        },

        isFeatured
          ? {
              price: featuredPriceId,
              quantity: 1,
            }
          : {},

        bringToTop
          ? {
              price: bringToTopPriceId,
              quantity: 1,
            }
          : {},
      ],
      currency: "USD",
      customer_email: session.user.email,
      mode: "payment",
    });
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
            email: session.user.email,
          },
        },
        company: {
          connect: {
            id: companyId,
          },
        },
      },
    });
    console.log(stripeSession);
    throw redirect(307, stripeSession.url as string);
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
    companyId: z.string(),
    basePostingPriceId: z.string().nonempty(),
    bringToTopPriceId: z.string().nonempty(),
    featuredPriceId: z.string().nonempty(),
  })
);
export default component$(() => {
  const company = useCompany();
  const currentTab = useSignal(1);
  const action = useCreateJob();

  const handleChangeTab = $((tab: number) => {
    currentTab.value = tab;
  });
  return (
    <Form action={action} class="w-full min-h-screen h-full relative">
      <input type="hidden" name="companyId" value={company.value.id} />

      <div class={[currentTab.value === 1 ? "block" : "hidden"]}>
        <JobInfo onTabChange={handleChangeTab} />
      </div>
      <div class={[currentTab.value === 2 ? "block" : "hidden"]}>
        <PlaceOrder onTabChange={handleChangeTab} />
      </div>
    </Form>
  );
});
