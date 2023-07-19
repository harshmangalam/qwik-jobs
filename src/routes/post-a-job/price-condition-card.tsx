import { type QRL, component$ } from "@builder.io/qwik";

export const PriceConditionCard = component$(
  ({
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
