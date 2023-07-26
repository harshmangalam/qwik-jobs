import { component$ } from "@builder.io/qwik";
import { Link, type DocumentHead, routeLoader$ } from "@builder.io/qwik-city";
import { Company } from "~/components/company";
import { JobCard } from "~/components/job-card";
import { JobStat } from "~/components/job-stat";
import { prisma } from "~/lib/prisma";

export const useStats = routeLoader$(async () => {
  const jobs = await prisma.job.count();
  const company = await prisma.company.count();
  const users = await prisma.user.count();
  const subscriber = await prisma.subscriber.count();
  return {
    jobs,
    company,
    users,
    subscriber,
  };
});
export const useJobs = routeLoader$(async () => {
  return prisma.job.findMany({
    take: 5,
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
  const stats = useStats();
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
          <Company />
        </div>
      </section>

      <section class="bg-base-100 py-12 container mx-auto">
        <div class="text-xl font-bold text-center mb-4">Lastest Qwik Jobs</div>
        <div class="grid grid-cols-1 gap-4 max-w-3xl mx-auto">
          {jobs.value.map((job) => (
            <JobCard key={job.id} {...job} />
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
            <JobStat
              count={stats.value.jobs}
              title="Job Posted"
              icon="material-symbols:work-outline"
            />

            <JobStat
              icon="pajamas:building"
              count={stats.value.company}
              title="Companies"
            />
            <JobStat icon="la:users" count={stats.value.users} title="Users" />

            <JobStat
              icon="formkit:email"
              count={stats.value.subscriber}
              title="Newsletter subscribers"
            />
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
