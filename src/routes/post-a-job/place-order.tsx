import { type QRL, component$, useSignal } from "@builder.io/qwik";
import { PageHeader } from "./page-header";
import { PriceConditionCard } from "./price-condition-card";
import { Button } from "~/components/ui/actions/button";
import { Logo } from "~/components/logo";
import { BasePriceCard } from "./base-price-card";

interface PlaceOrderProps {
  onTabChange: QRL<(tab: number) => {}>;
}
export const PlaceOrder = component$((props: PlaceOrderProps) => {
  const { onTabChange } = props;
  const price = useSignal(10);
  const bringToTop = useSignal(false);
  const isFeatured = useSignal(false);

  return (
    <div class="grid grid-cols-12 h-full gap-6 divide-x absolute inset-0">
      <div class="col-span-12 lg:col-span-8 py-4 max-w-3xl mx-auto">
        <div class="mb-8">
          <Logo />
        </div>
        <PageHeader
          title="Configure your opening"
          subtitle="Get more visibility with add-ons. Configure your opening with these optional add-ons:"
        />
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <BasePriceCard />
          <div>
            <ul class="flex flex-col gap-y-4">
              <PriceConditionCard
                title="Bring to top after 14 days"
                description="Place the job on the top of the list again after 14 days"
                price="$5.00"
              />
              <PriceConditionCard
                title="Featured job post"
                description="Feature your opening in highlight and get more visibility"
                price="$7.00"
              />
            </ul>
          </div>
        </div>
        <div class="mt-8">
          <button onClick$={() => onTabChange(2)} class="btn">
            <iconify-icon
              width={24}
              height={24}
              icon="formkit:arrowleft"
            ></iconify-icon>
            Prev
          </button>
        </div>
      </div>

      <div class="col-span-12 h-full lg:col-span-4 py-4 px-8 bg-base-200">
        <div class="max-w-3xl mx-auto h-full flex flex-col justify-between  ">
          <div>
            <article class="card bg-base-100 card-compact shadow card-bordered">
              <div class="card-body">
                <div class="card-title">
                  <div class="form-control w-full">
                    <label class="cursor-pointer label items-start">
                      <span class="label-text font-bold text-lg">
                        Renew your opening
                      </span>
                      <div>
                        <input
                          type="checkbox"
                          class="toggle toggle-primary"
                          checked
                        />
                      </div>
                    </label>
                  </div>
                </div>
                <div class="font-semibold">Get 20% off when you subscribe.</div>
                <p>
                  Renew your job automatically every month. Bring it to the top
                  of the list and get promoted again. Cancel anytime after 2nd
                  month.
                </p>
              </div>
            </article>
          </div>
          <div class="mt-8">
            <Button
              type="submit"
              size="btn-lg"
              fullWidth
              colorScheme="btn-primary"
            >
              Post my job for ${price.value}
            </Button>

            <p class="text-xs prose mt-4">
              You’ll be redirected to Stripe to checkout with creditcard. Prefer
              a different payment method or need a PO? Contact us.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
});
