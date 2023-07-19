import { component$ } from "@builder.io/qwik";
import { Logo } from "~/components/logo";
import { Link } from "@builder.io/qwik-city";
import { ProfileMenu } from "~/components/profile-menu";
import { Theme } from "~/components/theme";
import { useAuthSession } from "~/routes/plugin@auth";
import { NavLink } from "./nav-link";

export const Navbar = component$(() => {
  const session = useAuthSession();
  const links = [
    {
      name: "Browse jobs",
      href: "/jobs/",
    },
    {
      name: "Get job alerts",
      href: "/job-alerts/",
    },
  ];
  return (
    <nav class="navbar  shadow">
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
            class="menu dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {links.map((link) => (
              <NavLink key={link.name} {...link} />
            ))}

            <li>
              <Link href="/post-a-job"> Post a job from $10</Link>
            </li>
          </ul>
        </div>
        <Logo />
      </div>
      <div class="navbar-center hidden lg:flex">
        <ul class="menu menu-md menu-horizontal px-1 gap-2">
          {links.map((link) => (
            <NavLink key={link.name} {...link} />
          ))}
        </ul>
      </div>

      <div class="navbar-end flex items-center gap-2">
        <Link href="/post-a-job" class="btn btn-primary hidden md:flex">
          Post a job from $10
        </Link>
        {session.value?.user ? (
          <ProfileMenu
            avatar={session.value.user.image}
            name={session.value.user.name}
          />
        ) : (
          <Link href="/login" class="btn btn-ghost">
            Login
          </Link>
        )}
        <Theme />
      </div>
    </nav>
  );
});
