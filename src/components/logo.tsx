import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";

export const Logo = component$(() => {
  return (
    <Link href="/" class="text-2xl font-semibold">
      <h1>QWIKJOBS</h1>
    </Link>
  );
});
