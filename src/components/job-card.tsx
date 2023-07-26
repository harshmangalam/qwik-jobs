import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";

interface JobCardProps {
  id: string;
  title: string;
  jobType: string;
  experienceLevel: string;
  employmentModel: string;
  locations: string[];
  company: any;
  isFeatured: boolean;
}
export const JobCard = component$((props: JobCardProps) => {
  const {
    id,
    title,
    company,
    employmentModel,
    experienceLevel,
    jobType,
    locations,
    isFeatured,
  } = props;
  return (
    <Link
      href={`/jobs/${id}`}
      class={[
        "bg-base-100 transition-all group duration-200 ease-in-out hover:border-l-8 hover:ring-2 ring-primary hover:border-primary cursor-pointer relative  block card-bordered card shadow",
        {
          "bg-warning text-warning-content": isFeatured,
        },
      ]}
    >
      <div class="card-body relative">
        {isFeatured && (
          <div class="absolute right-8 top-8">
            <div class="flex items-center gap-2">
              <iconify-icon
                width={24}
                height={24}
                icon="solar:star-bold-duotone"
              ></iconify-icon>
              Featured
            </div>
          </div>
        )}
        <div class="flex flex-col justify-center md:flex-row md:justify-start md:items-center">
          <div class="flex items-center">
            <div class="overflow-hidden  w-12 h-12 md:w-12 md:h-12 rounded-xl shrink-0">
              <img
                src={company.avatar}
                alt={company.name}
                class="object-contain w-full h-full"
                loading="lazy"
                width={48}
                height={48}
              />
            </div>
            <div class="ml-3">
              <div class="font-display text-lg leading-tight font-bold">
                {title}
              </div>
              <div>
                <div class="flex items-center text-sm font-medium text-muted">
                  {company.name}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="card-actions">
          <div class="badge badge-info uppercase">{jobType}</div>
          <div class="badge badge-secondary uppercase">{employmentModel}</div>
          <div class="badge badge-success uppercase">{experienceLevel}</div>

          {locations.map((location) => (
            <div class="badge" key={location}>
              {location}
            </div>
          ))}
          <div class="ml-auto flex items-center gap-1 font-bold transition-opacity duration-400 absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 text-sm">
            View details
            <iconify-icon
              width={24}
              height={24}
              icon="formkit:arrowright"
            ></iconify-icon>
          </div>
        </div>
      </div>
    </Link>
  );
});
