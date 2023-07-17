import { component$ } from "@builder.io/qwik";

export const PriceConditionCard = component$(
  ({
    title,
    price,
    description,
  }: {
    title: string;
    description: string;
    price: string;
  }) => {
    return (
      <article class="card">
        <div class="card-body">
          <div class="card-title">
            <div class="form-control w-full">
              <label class="cursor-pointer label items-start">
                <span class="label-text font-bold text-lg">{title}</span>
                <div>
                  <input
                    type="checkbox"
                    class="toggle toggle-primary"
                    checked
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
