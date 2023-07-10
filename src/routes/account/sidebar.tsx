import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import { Logo } from "~/components/logo";

export const Sidebar = component$(() => {
  const menus = [
    {
      title: "Employer",
      links: [
        {
          name: "Company",
          link: "/account/company/",
          icon: "mdi:company",
        },
        {
          name: "Job postings",
          link: "/account/jobs/",
          icon: "material-symbols:work",
        },
      ],
    },
    {
      title: "Account",
      links: [
        {
          name: "User settings",
          link: "/account/user/",
          icon: "ri:user-settings-fill",
        },
      ],
    },
  ];
  return (
    <aside
      class="absolute bg-base-200 top-0 left-0 w-80 bottom-0
    "
    >
      <div class="mb-8 px-2 py-4">
        <Logo />
      </div>
      <ul class="menu bg-base-200 rounded-box">
        {menus.map(({ links, title }) => (
          <>
            <li>{title}</li>
            {links.map(({ icon, link, name }) => (
              <li key={name}>
                <Link href={link}>
                  <iconify-icon
                    icon={icon}
                    width={24}
                    height={24}
                  ></iconify-icon>
                  {name}
                </Link>
              </li>
            ))}
          </>
        ))}
      </ul>
    </aside>
  );
});
