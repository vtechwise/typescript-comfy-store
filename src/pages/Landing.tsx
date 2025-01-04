import { FeaturedProduct, Hero } from "@/components/landing";
import { customFetch, ProductsResponse } from "@/utils";
import { LoaderFunction } from "react-router-dom";

const url = "/products?featured=true";

export const loader: LoaderFunction = async (): Promise<ProductsResponse> => {
  const response = await customFetch<ProductsResponse>(url);
  return { ...response.data };
};

const Landing = () => {
  return (
    <div>
      <Hero />
      <FeaturedProduct />
    </div>
  );
};
export default Landing;
