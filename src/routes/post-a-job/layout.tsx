import { Slot, component$ } from "@builder.io/qwik";

export default component$(() => {
  return (
    <div class="py-10 max-w-3xl w-full mx-auto">
      <ul class="steps w-full justify-start">
        <li class="step step-primary">Company details</li>
        <li class="step step-primary">Job information</li>
        <li class="step">Place order</li>
      </ul>

      <div>
        <Slot />
      </div>
    </div>
  );
});
