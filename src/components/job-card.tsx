import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";

export const JobCard = component$(() => {
  return (
    <Link
      href="/jobs/playpilot-2-senior-frontend-developer-clone"
      class="bg-yellow-200 transition-all group duration-200 ease-in-out hover:border-l-8 hover:ring-2 ring-primary hover:border-primary cursor-pointer relative  block border rounded-xl p-4  group  ring-brand-primary"
    >
      <div class="absolute top-3 right-4 font-bold text-xs text-yellow-800">
        <i class="fa-regular fa-star"></i> Featured
      </div>
      <div class="flex flex-col justify-center md:flex-row md:justify-start md:items-center">
        <div class="flex items-center">
          <div class="overflow-hidden w-full h-full w-12 h-12 md:w-12 md:h-12 rounded-xl shrink-0">
            <img
              src="https://app.sveltejobs.com/storage/243/e94f10f5-9030-4d12-a9b8-f6a501930127.png"
              alt="Logo PlayPilot"
              class="object-contain w-full h-full"
              loading="lazy"
              width={"100%"}
              height={"100%"}
            />
          </div>
          <div class="ml-3">
            <div class="font-display text-lg leading-tight font-bold">
              Senior Frontend Developer
            </div>
            <div>
              <div class="flex items-center text-sm font-medium text-muted">
                at PlayPilot
              </div>
            </div>
          </div>
        </div>
        <div class="ml-auto font-display font-bold transition-opacity duration-400 absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 text-sm">
          View details
          <i class="far fa-arrow-right fa-fw ml-1" aria-hidden="true"></i>
        </div>
      </div>
      <div class="text-xs mt-3 flex gap-x-4 gap-y-1 flex-wrap items-center md:gap-2">
        <span class="inline-block bg-gray-100 px-1.5 py-0.5 rounded-lg">
          Remote allowed
        </span>
        <span class="inline-flex gap-1.5 items-center px-1.5 py-0.5 bg-gray-100 font-medium rounded-lg">
          <img
            src="https://hatscripts.github.io/circle-flags/flags/se.svg"
            alt="Flag of Sweden"
            class="h-3"
          />
          Stockholm, Sweden
        </span>
      </div>
    </Link>
  );
});