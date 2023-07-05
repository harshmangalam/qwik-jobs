import { component$ } from "@builder.io/qwik";
import { JobCard } from "~/components/job-card";

export default component$(() => {
  return (
    <div class="py-8 container mx-auto">
      <h1 class="text-4xl font-display font-bold"> All Qwik.js jobs </h1>
      <p class="mt-3 text-lg text-gray-500">
        Browse through our list of Qwik jobs.
      </p>
      <div class="grid grid-cols-1 gap-6 mt-8">
        {[...new Array(4)].map((_) => (
          <JobCard />
        ))}
      </div>
    </div>
  );
});