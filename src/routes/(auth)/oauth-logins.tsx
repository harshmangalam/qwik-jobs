import { component$ } from "@builder.io/qwik";
import { Github } from "./github";

export const OauthLogin = component$(() => {
  return (
    <div class="grid grid-cols-2 gap-4 mt-8">
      <Github />
      <button class="btn btn-outline">
        <iconify-icon width={24} height={24} icon="mdi:linkedin"></iconify-icon>
        with Linkedin
      </button>
    </div>
  );
});
