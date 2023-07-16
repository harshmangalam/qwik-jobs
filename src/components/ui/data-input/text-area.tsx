import { type QwikIntrinsicElements, component$ } from "@builder.io/qwik";

type HTMLTextareaProps = QwikIntrinsicElements["textarea"];
type CustomProps = {
  label: string;
  error?: string | undefined;
};
type TextareaProps = HTMLTextareaProps & CustomProps;
export const Textarea = component$((props: TextareaProps) => {
  const { label, id, error, ...textareaProps } = props;
  return (
    <div class="form-control">
      <label for={id} class="label">
        <span class="label-text">{label}</span>
      </label>
      <textarea
        class={["input input-bordered", { "input-error": error }]}
        id={id}
        {...textareaProps}
      />
      {error && (
        <label class="label">
          <span class="label-text-alt text-error">{error}</span>
        </label>
      )}
    </div>
  );
});
