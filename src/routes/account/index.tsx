import { component$ } from "@builder.io/qwik";
import { type RequestHandler } from "@builder.io/qwik-city";

export const onRequest: RequestHandler = ({ redirect }) => {
  throw redirect(303, "/account/user/");
};
export default component$(() => {
  return <div></div>;
});
