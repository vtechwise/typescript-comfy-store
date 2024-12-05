import {
  Filters,
  PaginationContainer,
  ProductContainer,
  ProductsList,
} from "@/components/products";
import { customFetch, ProductsResponse } from "@/utils";
import { LoaderFunction } from "react-router-dom";

const url = "/products";

export const loader: LoaderFunction = async (): Promise<ProductsResponse> => {
  const response = await customFetch<ProductsResponse>(url);
  return { ...response.data };
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
