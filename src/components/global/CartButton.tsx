import { ShoppingCartIcon } from "lucide-react";
import { Button } from "../ui/button";
import { useAppSelector } from "@/hooks";
import { Link } from "react-router-dom";

const CartButton = () => {
  const numItemIncart = useAppSelector(
    (state) => state.cartState.numItemsInCart
  );

  return (
    <Link to={"/cart"}>
      <Button
        size="icon"
        variant="outline"
        className="relative grid place-items-center"
      >
        <ShoppingCartIcon></ShoppingCartIcon>
        <span className="h-6 w-6 absolute -top-3 -right-3 grid place-items-center bg-primary rounded-full">
          {numItemIncart}
        </span>
      </Button>
    </Link>
  );
};
export default CartButton;
