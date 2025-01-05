import { useAppSelector } from "@/hooks";
import { Card } from "../ui/card";
import {
  FirstColumn,
  FOurthColumn,
  SecondColumn,
  ThirdtColumn,
} from "./CartColumns";

const CartItemList = () => {
  const { cartItems } = useAppSelector((state) => state.cartState);
  return (
    <div>
      {cartItems.map((cartItem) => {
        const { cartID, title, price, image, company, amount, productColor } =
          cartItem;
        return (
          <Card
            key={cartID}
            className="p-6  mb-8 flex sm:flex-row flex-col flex-wrap gap-y-4"
          >
            <FirstColumn image={image} title={title} />
            <SecondColumn
              title={title}
              company={company}
              productColor={productColor}
            />
            <ThirdtColumn amount={amount} cartID={cartID} />
            <FOurthColumn price={price} />
          </Card>
        );
      })}
    </div>
  );
};
export default CartItemList;
