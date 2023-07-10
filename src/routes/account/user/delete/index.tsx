import { component$ } from "@builder.io/qwik";
import { Button } from "~/components/ui/actions/button";

export default component$(() => {
  return (
    <div>
      <p class="prose text-lg">
        You are about to delete your account. Please be aware that this action
        cannot be undone. All your data (company, job postings or professional
        profile) will be permanently deleted.
      </p>
      <div class="mt-4">
        <Button colorScheme="btn-error" outline>
          Yes delete my account
        </Button>
      </div>
    </div>
  );
});
