import { type QwikIntrinsicElements, component$, Slot } from "@builder.io/qwik";

type CustomProps = {
  loading?: boolean;
  fullWidth?: boolean;
  colorScheme?: "btn-primary" | "btn-secondary" | "btn-error" | "btn-success";
  outline?: boolean;
};
type ButtonProps = CustomProps & QwikIntrinsicElements["button"];
export const Button = component$((props: ButtonProps) => {
  const {
    loading,
    fullWidth = false,
    colorScheme = "",
    outline,
    ...buttonProps
  } = props;
  return (
    <button
      disabled={loading}
      type="submit"
      class={[
        "btn",
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
