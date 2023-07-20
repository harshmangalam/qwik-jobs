import { component$ } from "@builder.io/qwik";

export const Company = component$(() => {
  const companies = [
    {
      name: "Builder.io",
      link: "https://www.builder.io/",
      avatar:
        "https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2F470aa2bd45fb4ff5b77c91a394a957e6?width=240",
    },
    {
      name: "Reflect",
      link: "https://reflect.app/",
      avatar: "https://reflect.app/home/build/q-7110c4a0.png",
    },
    {
      name: "Reflect",
      link: "https://soundy.cloud/",
      avatar: "https://soundy.cloud/favicon-32x32.png",
    },
  ];
  return (
    <div class="flex flex-wrap justify-center items-center gap-x-2 md:gap-x-8 gap-y-4 mt-2">
      {companies.map(({ avatar, name, link }) => (
        <a
          key={name}
          href={link}
          target="_blank"
          class="relative p-3 rounded-full bg-base-100 shadow-lg"
        >
          <img
            class="h-10 w-10"
            loading="lazy"
            src={avatar}
            alt="Logo Brave company"
            width={40}
            height={40}
          />
        </a>
      ))}
    </div>
  );
});
