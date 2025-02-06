export const pricePerMonth = (price: number, months: number) => {
  return parseFloat((price / months).toFixed(2));
};

export const formatPrice = (amount: number) => {
  const formattedPrice = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0, // Ensures no decimals
  }).format(amount);

  return formattedPrice;
};
