import { component$ } from "@builder.io/qwik";
import { routeLoader$ } from "@builder.io/qwik-city";
import { prisma } from "~/lib/prisma";

export const useJob = routeLoader$(async ({ params }) => {
  return prisma.job.findUnique({
    where: {
      id: params.id,
    },
    include: {
      company: true,
    },
  });
});
export default component$(() => {
  const job = useJob();
  return (
    <div>
      <div class="w-full h-20 bg-base-200 relative">
        <div class="absolute left-0 right-0 -bottom-12">
          <div class="container mx-auto">
            <div class="avatar">
              <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img
                  src={job.value?.company.avatar ?? ""}
                  alt={job.value?.company.name ?? ""}
                  width={96}
                  height={96}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="container mx-auto mt-20">
        <div class="flex flex-col gap-4">
          <h1 class="text-2xl lg:text-5xl font-bold font-display">
            {job.value?.title}
          </h1>
          <div class="flex items-center gap-3">
            <div class="text-xl">{job.value?.company.name}</div>
            {job.value?.company.website && (
              <a
                target="_blank"
                href={job.value.company.website}
                class="flex items-center gap-2 px-3 py-1 border border-base-100 hover:border-base-300 rounded-full"
              >
                <iconify-icon
                  width={18}
                  height={18}
                  icon="solar:link-broken"
                ></iconify-icon>
                <span>Website</span>
              </a>
            )}
          </div>
        </div>

        <div class="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div class="lg:col-span-8">
            <div class="font-bold text-3xl">Job description</div>
            <div
              class="mt-6 prose w-full"
              dangerouslySetInnerHTML={job.value?.description}
            ></div>
          </div>
          <div class="lg:col-span-4">
            <div class="stats stats-vertical shadow w-full">
              <div class="stat">
                <div class="stat-title">Employment model</div>
                <div class="stat-value text-lg">
                  {job.value?.employmentModel}
                </div>
              </div>
              <div class="stat">
                <div class="stat-title">Experience level</div>
                <div class="stat-value text-lg">
                  {job.value?.experienceLevel}
                </div>
              </div>
              <div class="stat">
                <div class="stat-title">Locations</div>
                <div class="stat-value mt-2 flex gap-2 flex-wrap">
                  {job.value?.locations.map((location) => (
                    <div class="badge badge-lg" key={location}>
                      {location}
                    </div>
                  ))}
                </div>
              </div>
              <div class="stat">
                <div class="stat-title">Job type</div>
                <div class="stat-value text-lg">{job.value?.jobType}</div>
              </div>
              <div class="stat">
                <div class="stat-title">Date posted</div>
                <div class="stat-value text-lg">
                  {job.value?.createdAt.toDateString()}
                </div>
              </div>
              <div class="stat">
                <div class="stat-title">Salary</div>
                <div class="stat-value text-lg">
                  {(job.value?.salary as any)?.salaryCurrency}{" "}
                  {(job.value?.salary as any)?.salaryRangeFrom} -{" "}
                  {(job.value?.salary as any)?.salaryRangeTo}
                </div>
              </div>
            </div>
            <div class="mt-8">
              <a
                target="_blank"
                href={job.value?.targetURL}
                class="btn btn-primary btn-block btn-lg"
              >
                Apply now
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});
