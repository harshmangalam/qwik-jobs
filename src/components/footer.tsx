import { component$ } from "@builder.io/qwik";
import { Logo } from "./logo";
import { useLinks } from "~/routes/layout";

export const Footer = component$(() => {
  const links = useLinks();
  return (
    <footer class="footer p-10 bg-base-100 text-base-content">
      <div>
        <Logo />
        <p>
          Qwik Jobs
          <br />
          Listing Qwik.js opportunities all over the world.
        </p>
      </div>
      <div>
        <span class="footer-title">Company</span>
        <a class="link link-hover">Terms and conditions</a>
        <a class="link link-hover">Privacy policy</a>
        <a class="link link-hover">Your account</a>
      </div>
      <div>
        <span class="footer-title">Quick links</span>
        <a class="link link-hover">Browse jobs</a>
        <a class="link link-hover">Post a job</a>
        <a class="link link-hover">Get in touch</a>
        <a class="link link-hover">RSS feed</a>
        <a class="link link-hover">JSON api</a>
      </div>
      <div>
        <span class="footer-title">Follow us</span>
        <div>
          {links.value.map(({ href, icon, name }) => (
            <a key={name} href={href} class="btn btn-circle btn-ghost">
              <iconify-icon width={24} height={24} icon={icon}></iconify-icon>
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
});
