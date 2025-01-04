import { Form, Link, useLoaderData } from "react-router-dom";

import { Button } from "../ui/button";
import { type ProductsResponseWithParams } from "@/utils";
import { FormInput } from "../global";
import FormSelect from "./FormSelect";
import FormRange from "./FormRange";
import FormCheckbox from "./FormCheckbox";

function Filters() {
  const { meta, params } = useLoaderData() as ProductsResponseWithParams;
  const { search, company, category, shipping, order, price } = params;
  return (
    <Form className="border p-8 rounded-mdpx-8 my-4 grid gap-x-4 gap-y-4 sm:grid-cols-2 md;grid-cols-3 lg:grid-cols-4 items-center">
      <div className="mb-3">
        <FormInput
          type="text"
          name="search"
          defaultValue={search}
          label="search produvt"
        />
      </div>
      {/* category */}
      <FormSelect
        name="category"
        options={meta.categories}
        defaultValue={category}
        label="select category"
      />
      {/* {companies} */}
      <FormSelect
        name="company"
        label="select company"
        options={meta.companies}
        defaultValue={company}
      />

      {/* order */}
      <FormSelect
        name="order"
        label="order by"
        options={["a-z", "z-a", "high", "low"]}
        defaultValue={order}
      />

      <FormRange name="price" defaultValue={price} label="price" />
      <FormCheckbox
        name="shipping"
        label="free shipping"
        defaultValue={shipping}
      />
      <Button type="submit" size="sm" className="self-end">
        search
      </Button>
      <Button
        type="button"
        asChild
        size="sm"
        variant={"outline"}
        className="self-end"
      >
        <Link to="/products">Reset </Link>
      </Button>
    </Form>
  );
}
export default Filters;
