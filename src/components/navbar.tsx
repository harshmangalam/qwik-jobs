import { component$ } from "@builder.io/qwik";
import { Logo } from "./logo";
import { Link } from "@builder.io/qwik-city";
import { ProfileMenu } from "./profile-menu";

export const Navbar = component$(() => {
  return (
    <nav class="navbar bg-base-100">
      <div class="flex-1 flex items-center gap-4">
        <Logo />
        <div class="flex items-center gap-2">
          <Link href="/jobs" class="btn btn-sm btn-ghost">
            Browse jobs
          </Link>
          <Link href="/job-alerts" class="btn btn-sm btn-ghost">
            Get job alerts
          </Link>
        </div>
      </div>
      <div class="flex items-center gap-2">
        <Link href="/post-a-job" class="btn btn-secondary">
          Post a job from $10
        </Link>
        <ProfileMenu />
      </div>
    </nav>
  );
});
