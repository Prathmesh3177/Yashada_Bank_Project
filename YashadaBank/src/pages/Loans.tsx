import { useTranslation } from 'react-i18next';
import PageHero from '../components/PageHero';
import SectionTitle from '../components/SectionTitle';
import Card from '../components/Card';
import LoanEmiCalculator from '../components/LoanEmiCalculator';
import { useSeo } from '../hooks/useSeo';

const Loans = () => {
  const { t } = useTranslation();
  const items = [
    t('loan.gold'),
    t('loan.personal'),
    t('loan.vehicle'),
    t('loan.business'),
    t('loan.education'),
    t('loan.home')
  ];

  useSeo({
    title: 'Loan Services | Yashada Bank',
    description: 'Get cooperative loans for personal, home, business, education, and vehicle needs.',
    path: '/loan-services'
  });

  return (
    <div className="bank-container space-y-10 py-10">
      <PageHero title={t('loans.heading')} description={t('loans.description')} />

      <section>
        <SectionTitle title={t('loans.heading')} />
        <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {items.map((item) => (
            <Card key={item}>
              <h2 className="text-lg font-bold text-brand-darkText">{item}</h2>
              <p className="mt-2 text-sm text-brand-secondaryText">{t('loan.description')}</p>
            </Card>
          ))}
        </div>
      </section>

      <section>
        <LoanEmiCalculator />
      </section>
    </div>
  );
};

export default Loans;
