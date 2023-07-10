import { component$, Slot } from "@builder.io/qwik";
import { routeLoader$, type RequestHandler } from "@builder.io/qwik-city";
import { Footer } from "~/components/footer";
import { Navbar } from "~/components/navbar";

export const useLinks = routeLoader$(() => {
  const links = [
    {
      name: "Github",
      href: "https://www.github.com/harshmangalam",
      icon: "mdi:github",
    },
    {
      name: "Twitter",
      href: "https://twitter.com/HarshMangalam6",
      icon: "mdi:twitter",
    },
    {
      name: "Linkedin",
      href: "https://www.linkedin.com/in/harshmangalam/",
      icon: "mdi:linkedin",
    },
  ];
  return links;
});
export const onGet: RequestHandler = async ({ cacheControl }) => {
  // Control caching for this request for best performance and to reduce hosting costs:
  // https://qwik.builder.io/docs/caching/
  cacheControl({
    // Always serve a cached response by default, up to a week stale
    staleWhileRevalidate: 60 * 60 * 24 * 7,
    // Max once every 5 seconds, revalidate on the server to get a fresh version of this page
    maxAge: 5,
  });
};

export default component$(() => {
  return (
    <div>
      <Navbar />
      <main>
        <Slot />
      </main>
      <Footer />
    </div>
  );
});
