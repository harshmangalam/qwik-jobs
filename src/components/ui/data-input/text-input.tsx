import { type QwikIntrinsicElements, component$ } from "@builder.io/qwik";

type InputProps = QwikIntrinsicElements["input"];
type CustomProps = {
  label: string;
  error?: string | undefined;
};
type TextInputProps = InputProps & CustomProps;
export const TextInput = component$((props: TextInputProps) => {
  const { label, id, error, ...inputProps } = props;
  return (
    <div class="form-control">
      <label for={id} class="label">
        <span class="label-text">{label}</span>
      </label>
      <input
        class={["input input-bordered", { "input-error": error }]}
        id={id}
        {...inputProps}
      />
      {error && (
        <label class="label">
          <span class="label-text-alt text-error">{error}</span>
        </label>
      )}
    </div>
  );
});
