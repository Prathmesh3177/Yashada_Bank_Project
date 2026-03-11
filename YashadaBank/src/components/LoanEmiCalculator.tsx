import { useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { calculateLoanEmi, formatCurrency } from '../lib/utils';
import Card from './Card';

const LoanEmiCalculator = () => {
  const { t } = useTranslation();
  const [amount, setAmount] = useState(500000);
  const [rate, setRate] = useState(11);
  const [tenure, setTenure] = useState(60);

  const emi = useMemo(() => calculateLoanEmi(amount, rate, tenure), [amount, rate, tenure]);

  return (
    <Card>
      <h3 className="text-xl font-bold text-brand-darkText">{t('loans.calculator')}</h3>
      <div className="mt-5 grid gap-4 md:grid-cols-3">
        <label className="text-sm text-brand-secondaryText">
          {t('loans.amount')}
          <input
            type="number"
            min={10000}
            className="mt-1 w-full rounded-lg border border-red-200 px-3 py-2 text-brand-darkText outline-none focus:ring-2 focus:ring-brand-primary"
            value={amount}
            onChange={(event) => setAmount(Number(event.target.value))}
          />
        </label>
        <label className="text-sm text-brand-secondaryText">
          {t('loans.rate')}
          <input
            type="number"
            min={1}
            max={20}
            step={0.1}
            className="mt-1 w-full rounded-lg border border-red-200 px-3 py-2 text-brand-darkText outline-none focus:ring-2 focus:ring-brand-primary"
            value={rate}
            onChange={(event) => setRate(Number(event.target.value))}
          />
        </label>
        <label className="text-sm text-brand-secondaryText">
          {t('loans.tenure')}
          <input
            type="number"
            min={6}
            max={360}
            className="mt-1 w-full rounded-lg border border-red-200 px-3 py-2 text-brand-darkText outline-none focus:ring-2 focus:ring-brand-primary"
            value={tenure}
            onChange={(event) => setTenure(Number(event.target.value))}
          />
        </label>
      </div>
      <p className="mt-5 rounded-lg bg-brand-light p-4 text-sm font-semibold text-brand-darkText md:text-base">
        {t('loans.emi')}: <span className="text-brand-primary">{formatCurrency(Math.round(emi))}</span>
      </p>
    </Card>
  );
};

export default LoanEmiCalculator;
