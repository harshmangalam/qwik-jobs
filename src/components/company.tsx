import { component$ } from "@builder.io/qwik";

export const Company = component$(() => {
  return (
    <a
      href=""
      target="_blank"
      class="relative p-3 rounded-full bg-base-100 shadow-lg"
    >
      <img
        class="h-10 w-10"
        loading="lazy"
        src="https://sveltejobs.com/images/logo-companies/brave-logo.svg"
        alt="Logo Brave company"
        width={40}
        height={40}
      />
    </a>
  );
});
