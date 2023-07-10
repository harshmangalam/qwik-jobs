import { type QwikIntrinsicElements, component$, Slot } from "@builder.io/qwik";

type CustomProps = {
  loading?: boolean;
  fullWidth?: boolean;
  colorScheme?: "btn-primary" | "btn-secondary" | "btn-error" | "btn-success";
  outline?: boolean;
  size?: "btn-sm" | "btn-md" | "btn-xs" | "btn-lg";
};
type ButtonProps = CustomProps & QwikIntrinsicElements["button"];
export const Button = component$((props: ButtonProps) => {
  const {
    loading,
    fullWidth = false,
    colorScheme = "",
    outline,
    size = "btn-md",
    ...buttonProps
  } = props;
  return (
    <button
      disabled={loading}
      type="submit"
      class={[
        "btn",
        size,
        colorScheme,
        { "btn-block": fullWidth },
        { "btn-outline": outline },
      ]}
      {...buttonProps}
    >
      {loading ? <span class={`loading loading-spinner`}></span> : <Slot />}
    </button>
  );
});
