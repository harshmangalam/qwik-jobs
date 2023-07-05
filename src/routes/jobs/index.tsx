import { component$ } from "@builder.io/qwik";
import { Form } from "@builder.io/qwik-city";
import { ExperienceLevel } from "~/components/filters/experience-level";
import { JobType } from "~/components/filters/job-type";
import { JobCard } from "~/components/job-card";

export default component$(() => {
  return (
    <div class="py-8 container mx-auto">
      <h1 class="text-4xl font-display font-bold"> All Qwik.js jobs </h1>
      <p class="mt-3 text-lg text-gray-500">
        Browse through our list of Qwik jobs.
      </p>
      <div class="grid grid-cols-12 gap-6 mt-8">
        <div class="col-span-8 flex flex-col gap-4">
          {[...new Array(4)].map((_) => (
            <JobCard />
          ))}
        </div>
        <div class="col-span-4">
          <Form>
            <article class="card bg-base-200">
              <div class="card-body p-4">
                <div class="card-title">Filters</div>
                <ExperienceLevel />
                <div class="card-actions">
                  <button type="submit" class="btn btn-primary btn-block">
                    Apply
                  </button>
                </div>
              </div>
            </article>
          </Form>
        </div>
      </div>
    </div>
  );
});
