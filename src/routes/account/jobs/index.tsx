import { type Session } from "@auth/core/types";
import { component$ } from "@builder.io/qwik";
import {
  Link,
  routeAction$,
  routeLoader$,
  z,
  zod$,
} from "@builder.io/qwik-city";
import { prisma } from "~/lib/prisma";
import { DeleteJob } from "./delete-job";

export const useJobs = routeLoader$(({ sharedMap, redirect }) => {
  const session: Session | null = sharedMap.get("session");
  if (!session?.user?.email) {
    throw redirect(303, "/login");
  }
  return prisma.job.findMany({
    where: {
      user: {
        email: session.user.email,
      },
    },
  });
});
export const useDeleteJob = routeAction$(
  async ({ id }, { redirect }) => {
    await prisma.job.delete({
      where: {
        id,
      },
    });
    throw redirect(303, "/account/jobs");
  },
  zod$({
    id: z.string().nonempty(),
  })
);
export default component$(() => {
  const jobs = useJobs();
  const columns = [
    "Title ",
    "Job type",
    "Experience level",
    "Employment model",
    "Payment",
    "Locations",
    "Created date",
    "Updated date",
    "Actions",
  ];
  return (
    <div>
      <div class="flex items-center justify-between">
        <div>
          <div class="font-medium text-3xl">Your openings</div>
          <div class="mt-2">Manage your live and draft job listings here.</div>
        </div>
        <Link href="/post-a-job" class="btn btn-primary">
          <iconify-icon
            width={24}
            height={24}
            icon="ic:baseline-plus"
          ></iconify-icon>
          Create job
        </Link>
      </div>

      <div class="mt-8">
        <table class="table table-zebra">
          <thead>
            <tr>
              {columns.map((column) => (
                <th key={column}>{column}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {jobs.value.map(
              ({
                employmentModel,
                experienceLevel,
                id,
                jobType,
                locations,
                title,
                updatedAt,
                createdAt,
                payment,
              }) => (
                <tr key={id}>
                  <td>{title}</td>
                  <td>{jobType}</td>
                  <td>{experienceLevel}</td>
                  <td>{employmentModel}</td>
                  <td>{JSON.stringify(payment)}</td>
                  <td>
                    <div class="flex flex-wrap gap-2">
                      {locations.map((location) => (
                        <div
                          key={location}
                          class="badge badge-outline badge-info"
                        >
                          {location}
                        </div>
                      ))}
                    </div>
                  </td>
                  <td>{createdAt.toDateString()}</td>
                  <td>{updatedAt.toDateString()}</td>
                  <td>
                    <DeleteJob id={id} />
                  </td>
                </tr>
              )
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
});
