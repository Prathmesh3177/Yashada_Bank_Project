export const formatCurrency = (amount: number) =>
  new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0
  }).format(amount);

export const truncateText = (value: string, length: number) => {
  if (value.length <= length) return value;
  return `${value.slice(0, length)}...`;
};

export const calculateLoanEmi = (principal: number, annualRate: number, tenureMonths: number) => {
  const monthlyRate = annualRate / (12 * 100);
  if (monthlyRate === 0) return principal / tenureMonths;
  const factor = (1 + monthlyRate) ** tenureMonths;
  return (principal * monthlyRate * factor) / (factor - 1);
};

export const calculateMaturity = (principal: number, annualRate: number, years: number) => {
  const rate = annualRate / 100;
  return principal * (1 + rate * years);
};
