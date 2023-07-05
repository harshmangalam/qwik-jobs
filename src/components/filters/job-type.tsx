import { component$ } from "@builder.io/qwik";

export const JobType = component$(() => {
  return (
    <div class="form-control">
      <label for="jobType" class="label cursor-pointer">
        <span class="label-text">Job Type</span>
      </label>
      <select
        name="jobType"
        id="jobType"
        class="select select-bordered select-primary"
      >
        <option value="FullTime">Full-time</option>
        <option value="PartTime">Part-time</option>
        <option value="Contract">Contract</option>
        <option value="Internship">Internship</option>
      </select>
    </div>
  );
});
