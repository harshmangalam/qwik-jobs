import { component$ } from "@builder.io/qwik";
import { routeLoader$ } from "@builder.io/qwik-city";
import { JobCard } from "~/components/job-card";
import { prisma } from "~/lib/prisma";

export const useJobs = routeLoader$(async () => {
  return prisma.job.findMany({
    include: {
      company: {
        select: {
          name: true,
          avatar: true,
        },
      },
    },
  });
});

export default component$(() => {
  const jobs = useJobs();
  return (
    <div class="py-8 container mx-auto">
      <h1 class="text-4xl font-display font-bold"> All Qwik.js jobs </h1>
      <p class="mt-3 text-lg text-gray-500">
        Browse through our list of Qwik jobs.
      </p>
      <div class="grid grid-cols-1 gap-4 mt-8">
        <div class="flex flex-col gap-4">
          {jobs.value.map((job) => (
            <JobCard key={job.id} {...job} />
          ))}
        </div>
      </div>
    </div>
  );
});
