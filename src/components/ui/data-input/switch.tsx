import { type QwikIntrinsicElements, component$ } from "@builder.io/qwik";

type InputProps = QwikIntrinsicElements["input"];
type CustomProps = {
  label: string;
  error?: string | undefined;
};
type SwitchProps = InputProps & CustomProps;
export const Switch = component$((props: SwitchProps) => {
  const { label, id, error, ...inputProps } = props;
  return (
    <div class="form-control">
      <label for={id} class="label">
        <span class="label-text">{label}</span>
      </label>
      <input class="toggle" id={id} {...inputProps} />
      {error && (
        <label class="label">
          <span class="label-text-alt text-error">Bottom Left label</span>
        </label>
      )}
    </div>
  );
});
