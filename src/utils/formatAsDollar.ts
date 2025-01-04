export const formatAsDollars = (price: string | number): string => {
  const dollarAmount = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(Number(price) / 100);
  return dollarAmount;
};
