import { component$ } from "@builder.io/qwik";
import { Link, useLocation } from "@builder.io/qwik-city";

export const Tab = component$(
  ({ link, name }: { link: string; name: string }) => {
    const loc = useLocation();
    return (
      <Link
        key={name}
        href={link}
        class={[
          "tab tab-bordered",
          { "tab-active": loc.url.pathname === link },
        ]}
      >
        {name}
      </Link>
    );
  }
);
