import { component$ } from "@builder.io/qwik";

export const JobType = component$(() => {
  return (
    <div class="form-control">
      <label class="label cursor-pointer">
        <span class="label-text">Full-time</span>
        <input type="checkbox" class="checkbox" />
      </label>

      <label class="label cursor-pointer">
        <span class="label-text">Part-time</span>
        <input type="checkbox" class="checkbox" />
      </label>
      <label class="label cursor-pointer">
        <span class="label-text">Contract</span>
        <input type="checkbox" class="checkbox" />
      </label>
      <label class="label cursor-pointer">
        <span class="label-text">Internship</span>
        <input type="checkbox" class="checkbox" />
      </label>
    </div>
  );
});
