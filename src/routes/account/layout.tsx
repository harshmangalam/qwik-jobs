import { Slot, component$ } from "@builder.io/qwik";
import { Sidebar } from "./sidebar";

export default component$(() => {
  return (
    <div>
      <Sidebar />
      <main class="ml-80">
        <Slot />
      </main>
    </div>
  );
});
