import { component$ } from "@builder.io/qwik";
import { JobCard } from "~/components/job-card";
import { TwitterCard } from "~/components/twitter-card";

export default component$(() => {
  return (
    <div class="py-8 container mx-auto">
      <h1 class="text-4xl font-display font-bold"> All Qwik.js jobs </h1>
      <p class="mt-3 text-lg text-gray-500">
        Browse through our list of Qwik jobs.
      </p>
      <div class="grid grid-cols-12 gap-12 mt-8">
        <div class="col-span-12 md:col-span-8 flex flex-col gap-4">
          {[...new Array(4)].map(() => (
            <JobCard />
          ))}
        </div>
        <div class="col-span-12 md:col-span-4">
          <TwitterCard />
        </div>
      </div>
    </div>
  );
});
