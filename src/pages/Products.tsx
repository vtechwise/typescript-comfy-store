import {
  Filters,
  PaginationContainer,
  ProductContainer,
} from "@/components/products";
import {
  customFetch,
  ProductsResponse,
  ProductsResponseWithParams,
} from "@/utils";
import { LoaderFunction } from "react-router-dom";

const url = "/products";

export const loader: LoaderFunction = async ({
  request,
}): Promise<ProductsResponseWithParams> => {
  const params = Object.fromEntries([
    ...new URL(request.url).searchParams.entries(),
  ]);

  const response = await customFetch<ProductsResponse>(url, { params });

  return { ...response.data, params };
};

const Products = () => {
  return (
    <div>
      <Filters />
      <ProductContainer />
      <PaginationContainer />
    </div>
  );
};
export default Products;
