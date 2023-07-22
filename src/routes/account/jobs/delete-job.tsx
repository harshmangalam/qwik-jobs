import { component$ } from "@builder.io/qwik";
import { Form } from "@builder.io/qwik-city";
import { Button } from "~/components/ui/actions/button";
import { useDeleteJob } from ".";

export const DeleteJob = component$(({ id }: { id: string }) => {
  const action = useDeleteJob();
  return (
    <Form action={action}>
      <input type="hidden" value={id} name="id" />
      <Button
        loading={action.isRunning}
        type="submit"
        class="join-item btn btn-error btn-sm"
      >
        Delete
      </Button>
    </Form>
  );
});
