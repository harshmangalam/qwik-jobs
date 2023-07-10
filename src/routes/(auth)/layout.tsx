import { Slot, component$ } from "@builder.io/qwik";
import { Logo } from "~/components/logo";

export default component$(() => {
  return (
    <div class="pt-[10vh] pb-[10vh]">
      <div class="container max-w-md mx-auto">
        <div class="flex justify-center">
          <Logo />
        </div>
        <Slot />
      </div>
    </div>
  );
});
