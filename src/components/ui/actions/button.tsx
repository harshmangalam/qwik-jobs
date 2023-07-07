import { type QwikIntrinsicElements, component$, Slot } from "@builder.io/qwik";

type CustomProps = {
  loading?: boolean;
  fullWidth?: boolean;
  colorScheme?: "btn-primary" | "btn-secondary" | "btn-error" | "btn-success";
};
type ButtonProps = CustomProps & QwikIntrinsicElements["button"];
export const Button = component$((props: ButtonProps) => {
  const {
    loading,
    fullWidth = false,
    colorScheme = "btn-primary",
    ...buttonProps
  } = props;
  return (
    <button
      disabled={loading}
      type="submit"
      class={["btn", colorScheme, { "btn-block": fullWidth }]}
      {...buttonProps}
    >
      {loading ? <span class={`loading loading-spinner`}></span> : <Slot />}
    </button>
  );
});
