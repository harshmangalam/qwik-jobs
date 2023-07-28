import { type QRL, component$, useSignal, $ } from "@builder.io/qwik";
import { PageHeader } from "./page-header";
import { PriceConditionCard } from "./price-condition-card";
import { Button } from "~/components/ui/actions/button";
import { Logo } from "~/components/logo";
import { BasePriceCard } from "./base-price-card";
import { RenewCard } from "./renew-card";

interface PlaceOrderProps {
  onTabChange: QRL<(tab: number) => {}>;
}
export const PlaceOrder = component$((props: PlaceOrderProps) => {
  const { onTabChange } = props;
  const basePrice = 10;
  const price = useSignal(basePrice);
  const bringToTop = useSignal(false);
  const isFeatured = useSignal(false);
  const monthlyRenew = useSignal(false);

  const handleIsFeaturedChange = $(() => {
    isFeatured.value = !isFeatured.value;
    price.value = isFeatured.value ? price.value + 6 : price.value - 6;
  });
  const handleBringToTopChange = $(() => {
    bringToTop.value = !bringToTop.value;
    price.value = bringToTop.value ? price.value + 4 : price.value - 4;
  });
  const handleChangeMonthlyRenew = $(() => {
    monthlyRenew.value = !monthlyRenew.value;
    price.value = monthlyRenew.value
      ? price.value - basePrice * (20 / 100)
      : price.value + basePrice * (20 / 100);
  });

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
        <input type="hidden" name="price" value={price.value} />
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <BasePriceCard />
          <div>
            <ul class="flex flex-col gap-y-4">
              <PriceConditionCard
                title="Bring to top after 14 days"
                description="Place the job on the top of the list again after 14 days"
                price="$4.00"
                value={bringToTop.value}
                onChange={handleBringToTopChange}
              />
              <PriceConditionCard
                title="Featured job post"
                description="Feature your opening in highlight and get more visibility"
                price="$6.00"
                value={isFeatured.value}
                onChange={handleIsFeaturedChange}
              />
            </ul>
          </div>
        </div>
        <div class="mt-8">
          <button type="button" onClick$={() => onTabChange(1)} class="btn">
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
          <RenewCard
            value={monthlyRenew.value}
            onChange={handleChangeMonthlyRenew}
          />
          <div class="mt-8">
            <input
              type="hidden"
              name="isFeatured"
              value={isFeatured.value ? "on" : "off"}
            />
            <input
              type="hidden"
              name="bringToTop"
              value={bringToTop.value ? "on" : "off"}
            />
            <input
              type="hidden"
              name="monthlyRenew"
              value={monthlyRenew.value ? "on" : "off"}
            />
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
