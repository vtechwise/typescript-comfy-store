import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

export enum Mode {
  SingleProduct = "SingleProduct",
  CartItem = "CartItem",
}

type SelectProductAmoutnProps = {
  mode: Mode.SingleProduct;
  amount: number;
  setAmount: React.Dispatch<React.SetStateAction<number>>;
};

type SelectCartItemAmountsProps = {
  mode: Mode.CartItem;
  amount: number;
  setAmount: (value: number) => void;
};

const SelectProductAmount = ({
  amount,
  mode,
  setAmount,
}: SelectProductAmoutnProps | SelectCartItemAmountsProps) => {
  const cartItem = mode === Mode.CartItem;
  return (
    <>
      <h4 className="font-medium mb-2">Amount:</h4>
      <Select
        defaultValue={amount.toString()}
        onValueChange={(value) => setAmount(Number(value))}
      >
        <SelectTrigger className={cartItem ? "w-[75px]" : "w-[150px]"}>
          <SelectValue placeholder={amount} />
        </SelectTrigger>
        <SelectContent>
          {Array.from({ length: cartItem ? amount + 10 : 10 }, (_, index) => {
            const selectValue = index + 1;
            return (
              <SelectItem key={index} value={selectValue.toString()}>
                {selectValue}
              </SelectItem>
            );
          })}
        </SelectContent>
      </Select>
    </>
  );
};
export default SelectProductAmount;
