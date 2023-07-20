import { type Session } from "@auth/core/types";
import { component$ } from "@builder.io/qwik";
import {
  Form,
  routeAction$,
  routeLoader$,
  z,
  zod$,
} from "@builder.io/qwik-city";
import { ImageUpload } from "~/components/image-upload";
import { Button } from "~/components/ui/actions/button";
import { TextInput } from "~/components/ui/data-input/text-input";
import { prisma } from "~/lib/prisma";
import { fileUpload } from "~/utils/blob";

export const useCompany = routeLoader$(async ({ sharedMap, error }) => {
  const session: Session | null = sharedMap.get("session");
  if (!session?.user?.email) throw error(401, "Unauthorized");
  const user = await prisma.user.findUnique({
    where: {
      email: session.user.email,
    },
    select: {
      company: true,
    },
  });

  return user?.company;
});
export const useUpdateCompany = routeAction$(
  async (
    { locations, name, twitter, website, companyId, avatar },
    { error, redirect, sharedMap }
  ) => {
    try {
      const session: Session | null = sharedMap.get("session");
      if (!session?.user?.email) return error(401, "Unauthorized");

      const user = await prisma.user.findUnique({
        where: {
          email: session.user.email,
        },
        select: {
          id: true,
          company: {
            select: {
              id: true,
            },
          },
        },
      });

      if (!user?.id) {
        return error(404, "User not found");
      }

      const uploaded = avatar ? await fileUpload(avatar) : null;

      if (!user.company) {
        // create new company

        await prisma.company.create({
          data: {
            website,
            name,
            twitter,
            locations: locations.split(","),
            userId: user.id,
            avatar: uploaded.secure_url,
            avatarPublicId: avatar.public_id,
          },
        });
      } else {
        // update company
        await prisma.company.update({
          where: {
            id: companyId,
          },
          data: {
            locations: locations.split(","),
            name,
            twitter,
            website,
            avatar: uploaded.secure_url,
            avatarPublicId: avatar.public_id,
          },
        });
      }

      redirect(303, "/account/company");
    } catch (err) {
      console.log(err);
      return error(500, "Internal server error");
    }
  },
  zod$({
    name: z.string(),
    avatar: z.any(),
    website: z.string(),
    twitter: z.string(),
    locations: z.string(),
    companyId: z.string().optional(),
  })
);
export default component$(() => {
  const company = useCompany();
  const action = useUpdateCompany();
  return (
    <div>
      <div class="font-medium text-3xl">Your company</div>
      <div class="mt-2">Configure your company information</div>
      <Form action={action} class="mt-8 grid grid-cols-1 gap-3">
        <input type="hidden" name="companyId" value={company.value?.id} />
        <TextInput
          label="Name"
          placeholder="ACME Info..."
          id="name"
          name="name"
          value={company.value?.name ?? ""}
        />
        <ImageUpload label="Avatar" name="avatar" id="avatar" />
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <TextInput
            label="Website"
            placeholder="https://website.com"
            id="website"
            name="website"
            value={company.value?.website ?? ""}
          />
          <TextInput
            label="Twitter"
            placeholder="@twitter"
            id="twitter"
            name="twitter"
            value={company.value?.twitter ?? ""}
          />
        </div>
        <TextInput
          name="locations"
          id="locations"
          label="Locations (seperate by comma)"
          placeholder="Add locations"
          value={company.value?.locations ?? ""}
        />
        <div class="flex justify-center pt-8">
          <Button
            loading={action.isRunning}
            type="submit"
            colorScheme="btn-primary"
          >
            Save Changes
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
