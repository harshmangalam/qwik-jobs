import { component$ } from "@builder.io/qwik";

export const WorkLocation = component$(() => {
  return (
    <div class="form-control">
      <label for="workLocation" class="label cursor-pointer">
        <span class="label-text">Work Location</span>
      </label>
      <select
        name="workLocation"
        id="workLocation"
        class="select select-bordered select-primary"
      >
        <option value="Remote">Remote</option>
        <option value="OnSite">On-site</option>
        <option value="Hybrid">Hybrid</option>
      </select>
    </div>
  );
});
