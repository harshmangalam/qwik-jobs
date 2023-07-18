import { component$ } from "@builder.io/qwik";
import { Link, type DocumentHead } from "@builder.io/qwik-city";
import { Company } from "~/components/company";
import { JobCard } from "~/components/job-card";
import { JobStat } from "~/components/job-stat";

export default component$(() => {
  return (
    <div>
      <section class="py-16 bg-base-200 text-center">
        <div class="container mx-auto relative max-w-3xl">
          <div class="mt-4 text-2xl md:text-6xl font-bold font-display">
            The #1 Job Board for <br />
            <span class="text-info inline-block"> Qwik </span> Developers
          </div>
          <div class="md:text-2xl mt-4">
            Find companies looking to hire Qwik developers or post a job if you
            are hiring Qwik developers.
          </div>
          <h4 class="mt-8 uppercase text-sm mb-4"> Trusted by: </h4>
          <div class="flex flex-wrap justify-center items-center gap-x-2 md:gap-x-8 gap-y-4 mt-2">
            {[...new Array(4)].map((_, i) => (
              <Company key={i} />
            ))}
          </div>
        </div>
      </section>

      <section class="bg-base-100 py-12 container mx-auto">
        <div class="text-xl font-bold text-center mb-4">Lastest Qwik Jobs</div>
        <div class="grid grid-cols-1 gap-4 max-w-3xl mx-auto">
          {[...new Array(4)].map((_, i) => (
            <JobCard key={i} />
          ))}
        </div>
      </section>

      <section class="bg-base-100 py-12">
        <div class="container mx-auto">
          <div class="max-w-3xl mx-auto text-center">
            <h2 class="text-5xl font-display font-bold">
              Hire <strong class="text-primary">Qwik developers</strong>
            </h2>
            <p class="mt-4 text-lg">
              Hire professional Qwik developers. Post your opening at
              <strong> Qwik Jobs</strong> and get tech filtered qualified
              candidates. Let us help you to find the best talent matches for
              your openings and make it reach thousands of
              <strong> Qwik developers</strong>!
            </p>
            <div class="py-12 flex items-center justify-center gap-3">
              <Link href="post-a-job" class="btn btn-primary">
                Post a job
              </Link>
              <span> and hire Qwik developers </span>
            </div>
          </div>
        </div>
      </section>

      <section class="py-12 bg-base-200">
        <div class="container mx-auto">
          <div class="font-bold text-3xl text-center">
            A little bit of numbers...
          </div>
          <div class="stats shadow w-full mt-8">
            {[...new Array(4)].map((_) => (
              <JobStat key={_} count={300} title="Job Posted">
                <svg
                  q:slot="icon"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.5"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  class="inline-block w-8 h-8 stroke-current"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z"
                  ></path>
                </svg>
              </JobStat>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
