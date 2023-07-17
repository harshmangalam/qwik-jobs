import { component$, Slot, useVisibleTask$ } from "@builder.io/qwik";

export default component$(() => {
  useVisibleTask$(() => {
    const theme = localStorage.getItem("theme");
    document.documentElement.setAttribute("data-theme", theme ?? "cupcake");
  });

  return <Slot />;
});
