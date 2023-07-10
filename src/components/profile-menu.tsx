import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";

export const ProfileMenu = component$(() => {
  const menus = [
    {
      name: "User profile",
      link: "/account/user/",
    },
    {
      name: "My jobs",
      link: "/account/jobs/",
    },
    {
      name: "My company",
      link: "/account/company/",
    },
  ];
  return (
    <div class="dropdown dropdown-end">
      <label tabIndex={0} class="btn btn-ghost btn-circle avatar">
        <div class="w-10 rounded-full">
          <img
            src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
            width={40}
            height={40}
          />
        </div>
      </label>
      <ul
        tabIndex={0}
        class="menu dropdown-content mt-3 z-[1] bg-base-100 w-52"
      >
        {menus.map(({ link, name }) => (
          <li key={name}>
            <Link href={link}>{name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
});
