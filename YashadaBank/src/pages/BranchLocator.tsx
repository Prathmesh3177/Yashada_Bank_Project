import { useTranslation } from 'react-i18next';
import PageHero from '../components/PageHero';
import SectionTitle from '../components/SectionTitle';
import BranchGrid from '../components/BranchGrid';
import { useSeo } from '../hooks/useSeo';

const BranchLocator = () => {
  const { t } = useTranslation();

  useSeo({
    title: 'Branch Locator | Yashada Bank',
    description: 'Locate Yashada branches across Maharashtra with maps and contact information.',
    path: '/branch-locator'
  });

  return (
    <div className="bank-container space-y-10 py-10">
      <PageHero title={t('branches.heading')} description={t('branches.description')} />

      <section>
        <SectionTitle title={t('branches.mapTitle')} />
        <div className="mt-6 overflow-hidden rounded-2xl border border-red-100 bg-white p-2 shadow-card">
          <iframe
            title="Yashada branch map"
            loading="lazy"
            className="h-80 w-full rounded-xl"
            src="https://www.google.com/maps?q=Dharashiv%20Maharashtra&z=8&output=embed"
          />
        </div>
      </section>

      <section>
        <BranchGrid />
      </section>
    </div>
  );
};

export default BranchLocator;
