import { OrdersResponse } from "@/utils";
import { LoaderFunction } from "react-router-dom";

export const loader = (): LoaderFunction => {
  return async ({}): Promise<OrdersResponse | Response | null> => {
    return null;
  };
};

const Orders = () => {
  return <div>Orders</div>;
};
export default Orders;
