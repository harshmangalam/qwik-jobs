import { component$ } from "@builder.io/qwik";

export const TwitterCard = component$(() => {
  return (
    <a
      href="https://twitter.com/intent/follow?screen_name=sveltejobs&amp;tw_p=followbutton"
      target="_blank"
      class="flex w-full items-center p-2 xl:px-5 xl:py-4 rounded-lg bg-slate-50 hover:bg-gray-200 duration-200 relative"
    >
      <div class="absolute opacity-20 right-4">
        <iconify-icon
          class="text-info"
          width={40}
          height={40}
          icon="mdi:twitter"
        ></iconify-icon>
      </div>
      <div class="leading-none relative">
        <div class="font-display font-semibold text-sm">
          Follow us on Twitter!
        </div>
        <div class="text-sm text-muted">@qwikjobs</div>
      </div>
    </a>
  );
});
