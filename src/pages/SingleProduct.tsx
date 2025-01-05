import { SelectProductAmount, SelectProductColor } from "@/components/products";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  CartItem,
  customFetch,
  formatAsDollars,
  SingleProductResponse,
} from "@/utils";
import { useState } from "react";
import { Link, type LoaderFunction, useLoaderData } from "react-router-dom";
import { Mode } from "@/components/products/SelectProductAmount";
import { useAppDispatch } from "@/hooks";
import { addItem } from "@/features/cart/cartSlice";

export const loader: LoaderFunction = async ({
  params,
}): Promise<SingleProductResponse> => {
  const response = await customFetch<SingleProductResponse>(
    `/products/${params.id}`
  );

  return { ...response.data };
};

const SingleProduct = () => {
  const { data: product } = useLoaderData() as SingleProductResponse;
  const dispatch = useAppDispatch();
  const { title, image, description, colors, company, price } =
    product.attributes;
  const dollarAmount = formatAsDollars(price);
  const [productColor, setProductColor] = useState(colors[0]);
  const [amount, setAmount] = useState<number>(1);

  const cartItem: CartItem = {
    cartID: productColor + product.id,
    price,
    image,
    amount,
    company,
    productColor,
    title,
    productID: product.id,
  };

  const addToCart = () => {
    dispatch(addItem(cartItem));
  };

  return (
    <section>
      <div className="flex h-6 gap-x-2 items-center">
        <Button asChild variant="link" size={"sm"}>
          <Link to={"/"}>home</Link>
        </Button>
        <Separator orientation="vertical" />
        <Button asChild variant="link" size={"sm"}>
          <Link to={"/products"}>Products</Link>
        </Button>
      </div>
      {/*PRODUCT  */}
      <div className="grid gap-y-8 lg:grid-cols-2 lg:gap-x-16 mt-6">
        {/* FIRST COLUMN */}
        <div>
          <img
            src={image}
            className="w-96 h-96 oject-cover rounded-lg lg:w-full"
            alt={title}
          />
        </div>
        {/* SECOUND COLUMN */}
        <div>
          <h1 className="capitalize text-3xl font-bold">{title}</h1>
          <h4 className="text-xl mt-2">{company}</h4>
          <p className="mt-3 text-md bg-muted inline-block rounded-md">
            {dollarAmount}
          </p>
          <p className="mt-6 leading-8">{description}</p>
          <SelectProductColor
            colors={colors}
            productColor={productColor}
            setProductColor={setProductColor}
          />
          <SelectProductAmount
            mode={Mode.SingleProduct}
            amount={amount}
            setAmount={setAmount}
          />
          <Button size={"lg"} className="mt-10" onClick={addToCart}>
            Add to Bag
          </Button>
        </div>
      </div>
    </section>
  );
};
export default SingleProduct;
