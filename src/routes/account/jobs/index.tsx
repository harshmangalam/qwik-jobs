import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <div>
      <div class="flex items-center justify-between">
        <div>
          <div class="font-medium text-3xl">Your openings</div>
          <div class="mt-2">Manage your live and draft job listings here.</div>
        </div>
        <Link href="/post-a-job" class="btn btn-primary">
          <iconify-icon
            width={24}
            height={24}
            icon="ic:baseline-plus"
          ></iconify-icon>
          Create job
        </Link>
      </div>
    </div>
  );
});
