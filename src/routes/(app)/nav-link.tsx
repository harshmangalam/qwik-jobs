import { component$ } from "@builder.io/qwik";
import { Link, useLocation } from "@builder.io/qwik-city";

export const NavLink = component$(
  ({ name, href }: { name: string; href: string }) => {
    const loc = useLocation();
    return (
      <li>
        <Link class={{ active: href === loc.url.pathname }} href={href}>
          {name}
        </Link>
      </li>
    );
  }
);
