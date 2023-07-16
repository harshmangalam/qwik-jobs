import { component$ } from "@builder.io/qwik";
import { TextInput } from "~/components/ui/data-input/text-input";

export default component$(() => {
  return (
    <div>
      <div>
        <div class="font-semibold text-2xl font-display">
          Describe your opening
        </div>
        <div class="text-lg text-gray-600 mt-4">
          Provide as many details as possible. Jobs can be edited after
          publishing anytime.
        </div>
      </div>

      <div>
        <TextInput name="title" id="title" label="Title" />
        <TextInput name="title" id="title" label="Title" />
        <div>
          <div class="join">
            <input
              class="join-item btn"
              type="radio"
              name="options"
              aria-label="Radio 1"
            />
            <input
              class="join-item btn"
              type="radio"
              name="options"
              aria-label="Radio 2"
            />
            <input
              class="join-item btn"
              type="radio"
              name="options"
              aria-label="Radio 3"
            />
          </div>
        </div>
      </div>
    </div>
  );
});
