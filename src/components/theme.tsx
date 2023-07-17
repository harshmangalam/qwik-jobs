import { $, component$ } from "@builder.io/qwik";

export const Theme = component$(() => {
  const themes = [
    "light",
    "dark",
    "cupcake",
    "synthwave",
    "halloween",
    "garden",
    "forest",
    "aqua",
    "lofi",
    "pastel",
    "wireframe",
    "dracula",
    "business",
    "night",
    "coffee",
  ];

  const handleApplyTheme = $((theme: string) => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  });

  return (
    <div class="dropdown dropdown-end">
      <label tabIndex={0} class="btn btn-ghost">
        <iconify-icon
          width={20}
          height={20}
          icon="mdi:theme-light-dark"
        ></iconify-icon>
      </label>
      <ul
        tabIndex={0}
        class="dropdown-content menu p-2  bg-base-100 rounded-box w-52 shadow"
      >
        {themes.map((theme) => (
          <li key={theme}>
            <button
              aria-label={`Theme ${theme}`}
              onClick$={() => handleApplyTheme(theme)}
            >
              {theme}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
});
