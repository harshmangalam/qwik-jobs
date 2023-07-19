import { type QRL, component$ } from "@builder.io/qwik";

export const RenewCard = component$(
  ({ value, onChange }: { value: boolean; onChange: QRL<() => void> }) => {
    return (
      <article
        class={[
          "card bg-base-100 card-compact shadow card-bordered",
          {
            "border-primary": value,
          },
        ]}
      >
        <div class="card-body">
          <div class="card-title">
            <div class="form-control w-full">
              <label class="cursor-pointer label items-start">
                <span class="label-text font-bold text-lg">
                  Renew your opening
                </span>
                <div>
                  <input
                    checked={value}
                    type="checkbox"
                    class="toggle toggle-primary"
                    onChange$={onChange}
                  />
                </div>
              </label>
            </div>
          </div>
          <div class="font-semibold">
            Get 20% off on base price when you subscribe.
          </div>
          <p>
            Renew your job automatically every month. Bring it to the top of the
            list and get promoted again. Cancel anytime after 2nd month.
          </p>
        </div>
      </article>
    );
  }
);
