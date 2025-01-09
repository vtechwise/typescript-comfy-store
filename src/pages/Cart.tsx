import { CartItemList, CartTotal } from "@/components/cart";
import { SectionTitle } from "@/components/global";
import { Button } from "@/components/ui/button";
import { useAppSelector } from "@/hooks";
import { Link } from "react-router-dom";

const Cart = () => {
  const user = useAppSelector((state) => state.userState.user);

  const { numItemsInCart } = useAppSelector((state) => state.cartState);

  if (numItemsInCart === 0) {
    return <SectionTitle text="Empty cart" />;
  }
  return (
    <section>
      <SectionTitle text="Empty cart" />
      <div className="mt-8 grid gap-8 lg:grid-cols-12">
        <div className="lg:col-span-8">
          <CartItemList />
        </div>
        <div className="lg:col-span-4 lg:pl-4">
          <CartTotal />
          {user ? (
            <Button asChild className="capitalize mt-8 w-full">
              <Link to={"/checkout"}>Proceed to checkout</Link>
            </Button>
          ) : (
            <Button asChild className="capitalize mt-8 w-full">
              <Link to={"/login"}>Please Login</Link>
            </Button>
          )}
        </div>
      </div>
    </section>
  );
};
export default Cart;
