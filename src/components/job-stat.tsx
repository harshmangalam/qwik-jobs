import { Slot, component$ } from "@builder.io/qwik";

export const JobStat = component$(
  ({ title, count }: { title: string; count: number }) => {
    return (
      <div class="stat">
        <div class="stat-figure text-primary">
          <Slot name="icon" />
        </div>
        <div class="stat-title">{title}</div>
        <div class="stat-value text-primary">{count}</div>
      </div>
    );
  }
);
