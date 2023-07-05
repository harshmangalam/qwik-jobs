import { component$ } from "@builder.io/qwik";
import { Logo } from "./logo";
import { Link } from "@builder.io/qwik-city";
import { ProfileMenu } from "./profile-menu";

export const Navbar = component$(() => {
  return (
    <nav class="navbar bg-base-100">
      <div class="navbar-start">
        <div class="dropdown">
          <label tabIndex={0} class="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link href="/jobs">Browse jobs</Link>
            </li>
            <li>
              <Link href="/job-alerts">Get job alerts</Link>
            </li>
          </ul>
        </div>
        <Logo />
      </div>
      <div class="navbar-center hidden lg:flex">
        <ul class="menu menu-horizontal px-1">
          <li>
            <Link href="/jobs">Browse jobs</Link>
          </li>
          <li>
            <Link href="/job-alerts">Get job alerts</Link>
          </li>
        </ul>
      </div>

      <div class="navbar-end">
        <Link href="/post-a-job" class="btn hidden md:flex">
          Post a job from $10
        </Link>
        <ProfileMenu />
      </div>
    </nav>
  );
});
