import { component$ } from "@builder.io/qwik";

export const PlaceOrder = component$(() => {
  return (
    <div class="grid grid-cols-12">
      <div class="col-span-8 bg-primary"></div>

      <div class="col-span-4 bg-secondary"></div>
    </div>
  );
});
