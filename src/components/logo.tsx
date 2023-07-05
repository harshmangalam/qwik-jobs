import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";

export const Logo = component$(() => {
  return (
    <Link href="/" class="btn btn-ghost normal-case text-xl">
      <h1 class="text-2xl font-semibold">QWIKJOBS</h1>
    </Link>
  );
});
