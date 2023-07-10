import { component$ } from "@builder.io/qwik";
import { Form } from "@builder.io/qwik-city";
import { Button } from "~/components/ui/actions/button";
import { TextInput } from "~/components/ui/data-input/text-input";

export default component$(() => {
  return (
    <div>
      <Form>
        <TextInput label="Name" id="name" name="name" />
        <TextInput label="Email" id="email" name="email" />
        <div class="mt-6">
          <Button type="submit" colorScheme="btn-primary">
            Save changes
            <iconify-icon
              width={24}
              height={24}
              icon="formkit:arrowright"
            ></iconify-icon>
          </Button>
        </div>
      </Form>
    </div>
  );
});
