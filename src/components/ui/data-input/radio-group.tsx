import { type QwikIntrinsicElements, component$ } from "@builder.io/qwik";

type InputProps = QwikIntrinsicElements["input"];
type CustomProps = {
  data: {
    label: string;
    value: string;
  }[];
};
type RadioGroupProps = CustomProps & InputProps;

export const RadioGroup = component$((props: RadioGroupProps) => {
  const { data, name, ...inputProps } = props;
  return (
    <div class="join">
      {data.map(({ label, value }) => (
        <input
          key={label}
          class="join-item btn"
          type="radio"
          name={name}
          value={value}
          aria-label={label}
          {...inputProps}
        />
      ))}
    </div>
  );
});
