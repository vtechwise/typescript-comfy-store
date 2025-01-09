import { CartTotal } from "@/components/cart";
import CheckoutForm from "@/components/Checkout/CheckoutForm";
import { SectionTitle } from "@/components/global";
import { useAppSelector } from "@/hooks";
import { toast } from "@/hooks/use-toast";
import { ReduxStore } from "@/store";
import { LoaderFunction, redirect } from "react-router-dom";

export const loader = (store: ReduxStore): LoaderFunction => {
  return async (): Promise<null | Response> => {
    const user = store.getState().userState.user;
    if (!user) {
      toast({
        description: "You can only access this page when your are logged in",
      });
      redirect("/login");
    }
    return null;
  };
};

const Checkout = () => {
  const cartTotal = useAppSelector((state) => state.cartState.cartTotal);
  if (cartTotal === 0) {
    return <SectionTitle text="Your cart is empty" />;
  }

  return (
    <section>
      <SectionTitle text="Place your order" />
      <div className="grid  mt-8 gap-8 md:grid-cols-2 items-start">
        <CheckoutForm />
        <CartTotal />
      </div>
    </section>
  );
};
export default Checkout;
