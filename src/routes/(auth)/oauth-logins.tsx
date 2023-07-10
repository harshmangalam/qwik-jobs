import { component$ } from "@builder.io/qwik";

export const OauthLogin = component$(() => {
  return (
    <div class="grid grid-cols-2 gap-4 mt-8">
      <button class="btn btn-outline">
        <iconify-icon width={24} height={24} icon="mdi:github"></iconify-icon>
        with Github
      </button>
      <button class="btn btn-outline">
        <iconify-icon width={24} height={24} icon="mdi:linkedin"></iconify-icon>
        with Github
      </button>
    </div>
  );
});
