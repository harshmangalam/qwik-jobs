import { component$ } from "@builder.io/qwik";

export const ExperienceLevel = component$(() => {
  return (
    <div class="form-control">
      <label for="jobType" class="label cursor-pointer">
        <span class="label-text">Experience Level</span>
      </label>
      <select
        name="jobType"
        id="jobType"
        class="select select-bordered select-primary"
      >
        <option value="Internship">Internship</option>
        <option value="Junior">Entry level</option>
        <option value="Associate">Associate</option>
        <option value="Senior">Senior level</option>
      </select>
    </div>
  );
});
