import { component$ } from "@builder.io/qwik";
import { Link, type DocumentHead } from "@builder.io/qwik-city";
import { JobCard } from "~/components/job-card";

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
            Find companies looking to hire Svelte developers or post a job if
            you are hiring Svelte developers.
          </div>
          <h4 class="mt-8 uppercase text-sm text-gray-600"> Trusted by: </h4>
          <div class="flex flex-wrap justify-center items-center gap-x-2 md:gap-x-8 gap-y-4 mt-2">
            <div class="relative p-3 rounded-full bg-white shadow-lg">
              <img
                class="h-10 w-10"
                loading="lazy"
                src="https://sveltejobs.com/images/logo-companies/apple_logo_grey.svg"
                alt="Logo Apple company"
              />
            </div>
            <div class="relative p-3 rounded-full bg-white shadow-lg">
              <img
                class="h-10 w-10"
                loading="lazy"
                src="https://sveltejobs.com/images/logo-companies/brave-logo.svg"
                alt="Logo Brave company"
              />
            </div>
            <div class="relative p-3 rounded-full bg-white shadow-lg">
              <img
                class="h-10 w-10"
                loading="lazy"
                src="https://sveltejobs.com/images/logo-companies/huggingface_logo.svg"
                alt="Logo Hugging Face company"
              />
            </div>
            <div class="relative p-3 rounded-full bg-white shadow-lg">
              <img
                class="h-10 w-10"
                loading="lazy"
                src="https://sveltejobs.com/images/logo-companies/latitude-logo-120x120.png"
                alt="Logo Latitude company"
              />
            </div>
            <div class="relative p-3 rounded-full bg-white shadow-lg">
              <img
                class="h-10 w-10"
                loading="lazy"
                src="https://sveltejobs.com/images/logo-companies/newyorktimes-icon.svg"
                alt="Logo The New York Times company"
              />
            </div>
          </div>
        </div>
      </section>

      <section class="bg-base-100 py-12 container mx-auto">
        <div class="text-xl font-bold text-center mb-4">Lastest Qwik Jobs</div>
        <div class="grid grid-cols-1 gap-4">
          {[...new Array(4)].map((job) => (
            <JobCard />
          ))}
        </div>
      </section>

      <section class="bg-base-100 py-12">
        <div class="container">
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
              <span> and hire Svelte developers </span>
            </div>
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
