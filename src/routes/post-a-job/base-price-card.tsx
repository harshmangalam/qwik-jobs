import { component$ } from "@builder.io/qwik";

export const BasePriceCard = component$(() => {
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
      title: "Shared in our social networks",
      subtitle: "Linkedin and twitter.",
    },
  ];
  return (
    <div class="card card-bordered border-primary shadow bg-base-200">
      <div class="card-body">
        <div class="card-title">
          <div class="form-control w-full">
            <label class="cursor-pointer label items-start">
              <span class="label-text font-bold text-lg">Base posting</span>
              <div>
                <input
                  type="hidden"
                  name="basePostingPriceId"
                  value="price_1NYl5aSF86syIwwHPHdhAYiK"
                />
                <input
                  type="checkbox"
                  class="toggle toggle-primary"
                  checked
                  disabled
                />
                <div class="font-bold text-sm">$10.00</div>
              </div>
            </label>
          </div>
        </div>

        <ul class="flex flex-col gap-y-4">
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
  );
});
