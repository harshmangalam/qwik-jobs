import { component$ } from "@builder.io/qwik";

export const JobStat = component$(
  ({ title, count, icon }: { title: string; count: any; icon: string }) => {
    return (
      <div class="stat">
        <div class="stat-figure">
          <iconify-icon icon={icon} width={32} height={32}></iconify-icon>
        </div>
        <div class="stat-title">{title}</div>
        <div class="stat-value text-xl">{count}</div>
      </div>
    );
  }
);
