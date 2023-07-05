import { component$ } from "@builder.io/qwik";

export const ExperienceLevel = component$(() => {
  return (
    <div class="form-control">
      <label class="label cursor-pointer">
        <span class="label-text">Internship</span>
        <input type="checkbox" class="checkbox" />
      </label>

      <label class="label cursor-pointer">
        <span class="label-text">Entry level</span>
        <input type="checkbox" class="checkbox" />
      </label>
      <label class="label cursor-pointer">
        <span class="label-text">Associate</span>
        <input type="checkbox" class="checkbox" />
      </label>
      <label class="label cursor-pointer">
        <span class="label-text">Senior level</span>
        <input type="checkbox" class="checkbox" />
      </label>
    </div>
  );
});
