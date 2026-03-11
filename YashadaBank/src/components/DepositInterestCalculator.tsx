import { useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { calculateMaturity, formatCurrency } from '../lib/utils';
import Card from './Card';

const DepositInterestCalculator = () => {
  const { t } = useTranslation();
  const [principal, setPrincipal] = useState(100000);
  const [rate, setRate] = useState(7.25);
  const [years, setYears] = useState(3);

  const maturity = useMemo(() => calculateMaturity(principal, rate, years), [principal, rate, years]);

  return (
    <Card>
      <h3 className="text-xl font-bold text-brand-darkText">{t('deposits.calculator')}</h3>
      <div className="mt-5 grid gap-4 md:grid-cols-3">
        <label className="text-sm text-brand-secondaryText">
          {t('deposits.principal')}
          <input
            type="number"
            min={1000}
            className="mt-1 w-full rounded-lg border border-red-200 px-3 py-2 text-brand-darkText outline-none focus:ring-2 focus:ring-brand-primary"
            value={principal}
            onChange={(event) => setPrincipal(Number(event.target.value))}
          />
        </label>
        <label className="text-sm text-brand-secondaryText">
          {t('deposits.rate')}
          <input
            type="number"
            min={1}
            max={15}
            step={0.1}
            className="mt-1 w-full rounded-lg border border-red-200 px-3 py-2 text-brand-darkText outline-none focus:ring-2 focus:ring-brand-primary"
            value={rate}
            onChange={(event) => setRate(Number(event.target.value))}
          />
        </label>
        <label className="text-sm text-brand-secondaryText">
          {t('deposits.years')}
          <input
            type="number"
            min={1}
            max={15}
            className="mt-1 w-full rounded-lg border border-red-200 px-3 py-2 text-brand-darkText outline-none focus:ring-2 focus:ring-brand-primary"
            value={years}
            onChange={(event) => setYears(Number(event.target.value))}
          />
        </label>
      </div>
      <p className="mt-5 rounded-lg bg-brand-light p-4 text-sm font-semibold text-brand-darkText md:text-base">
        {t('deposits.maturity')}: <span className="text-brand-primary">{formatCurrency(Math.round(maturity))}</span>
      </p>
    </Card>
  );
};

export default DepositInterestCalculator;
