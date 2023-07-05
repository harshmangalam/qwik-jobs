import { component$ } from "@builder.io/qwik";

export const JobStats = component$(
  ({ icon, title, count }: { icon: any; title: string; count: number }) => {
    return (
      <div class="stat">
        <div class="stat-figure text-primary">{icon}</div>
        <div class="stat-title">{title}</div>
        <div class="stat-value text-primary">{count}</div>
      </div>
    );
  }
);
