import { OrdersResponse } from "@/utils";
import { useLoaderData } from "react-router-dom";
import {
  Table,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";

function OrdersList() {
  const { data: orders, meta } = useLoaderData() as OrdersResponse;

  return (
    <div className="mt-16">
      <h4 className="mb-4 capitalize">total orders :{meta.pagination.total}</h4>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Address</TableHead>
            <TableHead>Products</TableHead>
            <TableHead>Cost</TableHead>
            <TableHead>Date</TableHead>
          </TableRow>
        </TableHeader>
        {orders.map((order) => {
          const { name, numItemsInCart, createdAt, address, orderTotal } =
            order.attributes;
          return (
            <TableRow key={order.id}>
              <TableCell>{name}</TableCell>
              <TableCell>{address}</TableCell>
              <TableCell>{numItemsInCart}</TableCell>
              <TableCell>{orderTotal}</TableCell>
              <TableCell>{new Date(createdAt).toDateString()}</TableCell>
            </TableRow>
          );
        })}
      </Table>
    </div>
  );
}
export default OrdersList;
