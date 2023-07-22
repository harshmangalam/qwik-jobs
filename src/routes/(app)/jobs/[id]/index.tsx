import { component$ } from "@builder.io/qwik";
import { routeLoader$ } from "@builder.io/qwik-city";
import { prisma } from "~/lib/prisma";

export const useJob = routeLoader$(async ({ params }) => {
  return prisma.job.findUnique({
    where: {
      id: params.id,
    },
    include: {
      company: {
        select: {
          id: true,
          name: true,
        },
      },
    },
  });
});
export default component$(() => {
  return <div></div>;
});
