
export const calculateDiscountPrice = (
  price = 0,
  discountPercentage = 0,
  digits = 2
) => {
  const discounted = price - (price * discountPercentage) / 100;
  return parseFloat(discounted.toFixed(digits));
};
