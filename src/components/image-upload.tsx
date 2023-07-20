import {
  $,
  type QwikChangeEvent,
  component$,
  useSignal,
  useVisibleTask$,
  type QwikMouseEvent,
  type QwikIntrinsicElements,
} from "@builder.io/qwik";

type ImageUploadProps = QwikIntrinsicElements["input"] & {
  label: string;
  id: string;
  avatar?: string | null;
};
export const ImageUpload = component$((props: ImageUploadProps) => {
  const { id, label, avatar, ...inputProps } = props;
  const preview = useSignal<string>();
  const inputRef = useSignal<HTMLInputElement | undefined>();

  useVisibleTask$(() => {
    return () => {
      if (preview.value) {
        URL.revokeObjectURL(preview.value);
        preview.value = "";
      }
    };
  });
  const handleChange = $((e: QwikChangeEvent<HTMLInputElement>) => {
    const imageFile = e.target.files?.[0];
    if (!imageFile) return;
    preview.value = URL.createObjectURL(imageFile);
  });

  const handleRemove = $(async (e: QwikMouseEvent<HTMLButtonElement>) => {
    try {
      await e.stopPropagation();
      if (!preview.value) return;
      URL.revokeObjectURL(preview.value);
      preview.value = "";
    } catch (error) {
      console.log(error);
    }
  });
  return (
    <div class="form-control">
      <label for={id} class="label">
        <span class="label-text">{label}</span>
      </label>
      <input
        ref={inputRef}
        type="file"
        hidden
        aria-label="Upload image"
        accept="image/*"
        id={id}
        onChange$={handleChange}
        {...inputProps}
      />

      <button
        onClick$={() => inputRef.value?.click()}
        class="border border-dashed p-2  w-full rounded-lg flex items-center gap-4"
      >
        <div class="w-20 h-20">
          {avatar || preview.value ? (
            <div class="avatar">
              <div class="w-full h-full">
                <img
                  src={avatar || preview.value}
                  alt="Thumbnail"
                  width={80}
                  height={80}
                  class="mask mask-squircle"
                />
              </div>
            </div>
          ) : (
            <div class="mask mask-squircle w-full h-full bg-base-200" />
          )}
        </div>
        <div class="flex flex-col gap-y-2 items-start">
          <p>Click to select an image or drag your file here.</p>
          <div>
            {preview.value && (
              <button class="btn btn-sm" onClick$={handleRemove}>
                Remove
              </button>
            )}
          </div>
        </div>
      </button>
    </div>
  );
});
