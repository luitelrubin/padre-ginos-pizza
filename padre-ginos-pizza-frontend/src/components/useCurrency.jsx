const intl = Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "NPR",
});
export const priceConverter = (price) => intl.format(price);
export default function useCurrency(price) {
  return priceConverter(price);
}
