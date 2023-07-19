import { component$ } from "@builder.io/qwik";
import { Link, useLocation } from "@builder.io/qwik-city";

export const MenuItem = component$(
  ({ link, icon, name }: { link: string; icon: string; name: string }) => {
    const loc = useLocation();
    return (
      <li>
        <Link href={link} class={{ active: loc.url.pathname === link }}>
          <iconify-icon icon={icon} width={24} height={24}></iconify-icon>
          {name}
        </Link>
      </li>
    );
  }
);
