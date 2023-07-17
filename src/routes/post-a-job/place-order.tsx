import { component$ } from "@builder.io/qwik";
import { PageHeader } from "./page-header";

export const PlaceOrder = component$(() => {
  const postingConditions = [
    {
      title: "Active for 30 days",
      subtitle: "Your opening will be live for 30 days.",
    },
    {
      title: "Included in our weekly newsletter",
      subtitle:
        "Get your job delivered to our entire database of active job seekers.",
    },
    {
      title: "Published in the official Svelte.js discord",
      subtitle:
        "Get featured into the #jobs channel for the official Svelte discord with dozens of thousands of active users every day.",
    },

    {
      title: "Shared in our social networks",
      subtitle: "Linkedin and twitter.",
    },
  ];
  return (
    <div class="grid grid-cols-12 h-full">
      <div class="col-span-8 h-full">
        <PageHeader
          title="Configure your opening"
          subtitle="Get more visibility with add-ons. Configure your opening with these optional add-ons:"
        />
        <div class="grid grid-cols-2 gap-6 mt-4">
          <div class="card bg-base-200">
            <div class="card-body">
              <div class="card-title">
                <div class="form-control w-full">
                  <label class="cursor-pointer label items-start">
                    <span class="label-text font-bold text-lg">
                      Base posting
                    </span>
                    <div>
                      <input
                        type="checkbox"
                        class="toggle toggle-primary"
                        checked
                      />
                      <div class="font-bold text-sm">$10.00</div>
                    </div>
                  </label>
                </div>
              </div>

              <ul class="flex flex-col gap-y-2">
                {postingConditions.map(({ subtitle, title }, i) => (
                  <li key={i}>
                    <div class="flex gap-3">
                      <div class="flex-none">
                        <iconify-icon
                          width={18}
                          height={18}
                          icon="icon-park-outline:check-correct"
                          class="text-success"
                        ></iconify-icon>
                      </div>

                      <div>
                        <div class="font-semibold leading-none">{title}</div>
                        <div class="text-sm mt-1">{subtitle}</div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div class="col-span-4  h-full"></div>
    </div>
  );
});
