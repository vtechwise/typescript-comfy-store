import { formatAsDollars } from "@/utils";
import { Separator } from "../ui/separator";
import { useAppSelector } from "@/hooks";
import { Card, CardTitle } from "../ui/card";

const CartTotal = () => {
  const { orderTotal, shipping, tax, cartTotal } = useAppSelector(
    (state) => state.cartState
  );
  return (
    <Card className="p-8 bg-muted">
      <CartTotalRow label="Subtotal " amount={cartTotal} />
      <CartTotalRow label="Shipping " amount={shipping} />
      <CartTotalRow label="Tax " amount={tax} />
      <CardTitle className="mt-8">
        <CartTotalRow label="Order total " lastRow amount={orderTotal} />
      </CardTitle>
    </Card>
  );
};
export default CartTotal;

function CartTotalRow({
  label,
  amount,
  lastRow,
}: {
  label: string;
  amount: number;
  lastRow?: boolean;
}) {
  return (
    <div>
      <p className="flex justify-between">
        <span>{label}</span>
        <span>{formatAsDollars(amount)}</span>
      </p>
      {lastRow ? null : <Separator className="my-2" />}
    </div>
  );
}
