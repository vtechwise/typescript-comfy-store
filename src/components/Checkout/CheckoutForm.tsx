import { ReduxStore } from "@/store";
import { ActionFunction, Form } from "react-router-dom";
import { FormInput, SubmitBtn } from "../global";

export const action = (store: ReduxStore): ActionFunction => {
  return async ({ request }): Promise<null> => {
    const formData = await request.formData();

    return null;
  };
};

function CheckoutForm() {
  return (
    <Form method="post" className="flex flex-col gap-y-4">
      <h4 className="font-medium text-xl mb-4">shipping information</h4>
      <FormInput type="text" name="name" label="first name" />
      <FormInput type="text" name="address" />
      <SubmitBtn text="Place Your Order " className="mt-4 " />
    </Form>
  );
}
export default CheckoutForm;
