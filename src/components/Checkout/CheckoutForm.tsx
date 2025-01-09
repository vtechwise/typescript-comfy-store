import { ReduxStore } from "@/store";
import { ActionFunction, Form, redirect } from "react-router-dom";
import { FormInput, SubmitBtn } from "../global";
import { toast } from "@/hooks/use-toast";
import { Checkout, customFetch, formatAsDollars } from "@/utils";
import { clearCart } from "@/features/cart/cartSlice";

export const action = (store: ReduxStore): ActionFunction => {
  return async ({ request }): Promise<null | Response> => {
    const formData = await request.formData();
    const name = formData.get("name") as string;
    const address = formData.get("address") as string;
    if (!name || !address) {
      toast({ description: "Please fill out all field" });
      return null;
    }
    const user = store.getState().userState.user;
    if (!user) {
      toast({ description: "Please login to place order" });
      return redirect("/login");
    }
    const { cartItems, orderTotal, numItemsInCart } =
      store.getState().cartState;

    const info: Checkout = {
      name,
      address,
      chargeTotal: orderTotal,
      orderTotal: formatAsDollars(orderTotal),
      cartItems,
      numItemsInCart,
    };
    try {
      const result = await customFetch.post(
        "/orders",
        { data: info },
        {
          headers: {
            Authorization: `Bearer ${user.jwt}`,
          },
        }
      );
      console.log(result);
      store.dispatch(clearCart());
      toast({ description: "Order placed" });
      return redirect("/Orders");
    } catch (error) {
      console.log(error);

      return null;
    }
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
