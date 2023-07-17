import { component$ } from "@builder.io/qwik";

export const PageHeader = component$(
  ({ title, subtitle }: { title: string; subtitle: string }) => {
    return (
      <div>
        <div class="font-semibold text-2xl font-display">{title}</div>
        <div class="text-lg text-gray-600 mt-2">{subtitle}</div>
      </div>
    );
  }
);
