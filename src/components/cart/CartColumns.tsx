export const FirstColumn = ({
  image,
  title,
}: {
  image: string;
  title: string;
}) => {
  return (
    <img
      src={image}
      alt={title}
      className="h-24 w-24 rounded-lg sm:h-32 sm:w-32 object-cover"
    />
  );
};

export const SecondColumn = ({
  title,
  company,
  productColor,
}: {
  title: string;
  company: string;
  productColor: string;
}) => {
  return (
    <div className="sm:ml-4 md:ml-12 sm:w-48 ">
      <h3 className="capitalize font-medium">{title} </h3>
      <h4 className="mt-2 capitalize text-sm">{company}</h4>
      <p className="mt-4 capitalize flex items-center gap-x-2 text-sm">
        color:{" "}
        <span
          style={{
            width: "15px",
            height: "15px",
            borderRadius: "50%",
            backgroundColor: productColor,
          }}
        ></span>
      </p>
    </div>
  );
};

export const ThirdtColumn = ({
  amount,
  cartID,
}: {
  amount: number;
  cartID: string;
}) => {
  return <div>first column</div>;
};

export const FOurthColumn = ({ price }: { price: string }) => {
  return <div>first column</div>;
};
