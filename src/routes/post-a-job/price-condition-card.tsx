import { type QRL, component$ } from "@builder.io/qwik";

export const PriceConditionCard = component$(
  ({
    name,
    priceId,
    title,
    price,
    description,
    value,
    onChange,
  }: {
    title: string;
    description: string;
    price: string;
    value: boolean;
    name: string;
    priceId: string;
    onChange: QRL<() => void>;
  }) => {
    return (
      <article
        class={[
          "card card-compact shadow card-bordered",
          { "border-primary": value },
        ]}
      >
        <div class="card-body">
          <div class="card-title">
            <div class="form-control w-full">
              <label class="cursor-pointer label items-start">
                <span class="label-text font-bold text-lg">{title}</span>
                <div>
                  <input type="hidden" name={name} value={priceId} />
                  <input
                    type="checkbox"
                    class="toggle toggle-primary"
                    checked={value}
                    onChange$={onChange}
                  />
                  <div class="font-bold text-sm">{price}</div>
                </div>
              </label>
            </div>
          </div>
          <p>{description}</p>
        </div>
      </article>
    );
  }
);
