import { type QwikIntrinsicElements, component$ } from "@builder.io/qwik";

type InputProps = QwikIntrinsicElements["input"];
type CustomProps = {
  label?: string;
  data: {
    label: string;
    value: string;
  }[];
};
type RadioGroupProps = CustomProps & InputProps;

export const RadioGroup = component$((props: RadioGroupProps) => {
  const { data, name, label, ...inputProps } = props;
  return (
    <div class="form-control">
      {label && (
        <label class="label">
          <span class="label-text">{label}</span>
        </label>
      )}
      <div class="join flex">
        {data.map(({ label, value }) => (
          <input
            key={label}
            class="join-item btn flex-grow"
            type="radio"
            name={name}
            value={value}
            aria-label={label}
            {...inputProps}
          />
        ))}
      </div>
    </div>
  );
});
