import { SectionTitle } from "@/components/global";
import OrdersList from "@/components/order/OrdersList";
import { toast } from "@/hooks/use-toast";
import { ReduxStore } from "@/store";
import { customFetch, OrdersResponse } from "@/utils";
import { LoaderFunction, redirect, useLoaderData } from "react-router-dom";

export const loader = (store: ReduxStore): LoaderFunction => {
  return async ({ request }): Promise<OrdersResponse | Response | null> => {
    const user = store.getState().userState.user;
    if (!user) {
      toast({ description: "Please Loginin to continue" });
      return redirect("/login");
    }
    const params = Object.fromEntries([
      ...new URL(request.url).searchParams.entries(),
    ]);
    console.log(params);

    try {
      const response = await customFetch.get<OrdersResponse>("/orders", {
        params,
        headers: {
          Authorization: `Bearer ${user.jwt}`,
        },
      });
      return { ...response.data };
    } catch (error) {}
    return null;
  };
};

const Orders = () => {
  const { meta, data } = useLoaderData() as OrdersResponse;
  console.log(meta, data);
  if (meta.pagination.total < 1) {
    return <SectionTitle text="Please maek an order" />;
  }

  return (
    <section>
      <SectionTitle text="Your orders" />
      <OrdersList />
    </section>
  );
};
export default Orders;
