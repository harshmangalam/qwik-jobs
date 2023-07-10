import { component$ } from "@builder.io/qwik";

export const PageHeader = component$(({ title }: { title: string }) => (
  <div class="font-medium text-3xl">{title}</div>
));
