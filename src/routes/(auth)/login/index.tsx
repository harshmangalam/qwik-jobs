import { component$ } from "@builder.io/qwik";
import { Logo } from "~/components/logo";

export default component$(() => {
  return (
    <div>
      <section>
        <Logo />
      </section>
    </div>
  );
});
