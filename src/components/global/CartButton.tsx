import { ShoppingCartIcon } from "lucide-react";
import { Button } from "../ui/button";

const CartButton = () => {
  const numItemIncart = 3;
  return (
    <Button size="icon" variant="outline" className="relative">
      <ShoppingCartIcon></ShoppingCartIcon>
      <span className="h-6 w-6 absolute -top-3 -right-3 grid place-items-center bg-primary rounded-full">
        {numItemIncart}
      </span>
    </Button>
  );
};
export default CartButton;
