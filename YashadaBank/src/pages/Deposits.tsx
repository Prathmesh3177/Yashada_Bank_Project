import { useTranslation } from 'react-i18next';
import PageHero from '../components/PageHero';
import SectionTitle from '../components/SectionTitle';
import Card from '../components/Card';
import DepositInterestCalculator from '../components/DepositInterestCalculator';
import { useSeo } from '../hooks/useSeo';

const Deposits = () => {
  const { t } = useTranslation();
  const items = [
    { name: t('deposits.recurring'), rate: '6.75% p.a.' },
    { name: t('deposits.fixed'), rate: '7.25% p.a.' },
    { name: t('deposits.senior'), rate: '7.75% p.a.' }
  ];

  useSeo({
    title: 'Deposit Schemes | Yashada Bank',
    description: 'Explore recurring and fixed deposit schemes with attractive interest rates.',
    path: '/deposit-schemes'
  });

  return (
    <div className="bank-container space-y-10 py-10">
      <PageHero title={t('deposits.heading')} description={t('deposits.description')} />

      <section>
        <SectionTitle title={t('deposits.heading')} />
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {items.map((item) => (
            <Card key={item.name}>
              <h2 className="text-lg font-bold text-brand-darkText">{item.name}</h2>
              <p className="mt-2 text-sm text-brand-secondaryText">
                {t('deposits.interestBenefit')}: {item.rate}
              </p>
            </Card>
          ))}
        </div>
      </section>

      <section>
        <DepositInterestCalculator />
      </section>
    </div>
  );
};

export default Deposits;
