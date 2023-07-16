import { component$ } from "@builder.io/qwik";
import { Form } from "@builder.io/qwik-city";
import { Button } from "~/components/ui/actions/button";
import { CompanyInfo } from "./company-info";
import JobInfo from "./job-info";

export default component$(() => {
  return (
    <Form class="mt-8 grid grid-cols-1 gap-3">
      <CompanyInfo />
      <JobInfo />
      <div class="flex justify-center pt-8">
        <Button type="submit" colorScheme="btn-primary">
          Save Changes
          <iconify-icon
            width={24}
            height={24}
            icon="formkit:arrowright"
          ></iconify-icon>
        </Button>
      </div>
    </Form>
  );
});
