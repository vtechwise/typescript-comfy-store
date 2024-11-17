import { formatAsDollars, ProductsResponse } from "@/utils";
import { Link, useLoaderData } from "react-router-dom";
import { Card, CardContent } from "../ui/card";

function ProductGrid() {
  const { data: products } = useLoaderData() as ProductsResponse;

  return (
    <section className="pt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {products.map((product) => {
        const { title, price, image } = product.attributes;
        const dollarAmount = formatAsDollars(price);
        return (
          <Link to={`/products/${product.id}`} key={product.id}>
            <Card className="">
              <CardContent className="p-4 ">
                <img
                  src={image}
                  alt={title}
                  className="rounded-md h-64 md:h-48 object-cover w-full"
                />
                <div className="text-center mt-4">
                  <h2 className="capitalize font-semibold text-xl">{title}</h2>
                  <p className="text-primary font-light mt-2">{dollarAmount}</p>
                </div>
              </CardContent>
            </Card>
          </Link>
        );
      })}
    </section>
  );
}
export default ProductGrid;
