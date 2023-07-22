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
              <div class="flex items-center gap-2">
                <iconify-icon
                  width={24}
                  height={24}
                  icon="solar:link-broken"
                ></iconify-icon>
                <div class="badge badge-ghost">
                  <a href={job.value.company.website}>Website</a>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
});
