import { useTranslation } from 'react-i18next';
import directorImage from '../assets/about-director-image-1.png';
import PageHero from '../components/PageHero';
import Card from '../components/Card';
import { useSeo } from '../hooks/useSeo';

const ChairmanMessage = () => {
  const { t } = useTranslation();

  useSeo({
    title: 'Chairman Message | Yashada Bank',
    description: 'Read the chairman message on growth, trust, and cooperative financial services.',
    path: '/chairman-message'
  });

  return (
    <div className="bank-container space-y-10 py-10">
      <PageHero title={t('chairman.heading')} description={t('chairman.designation')} />

      <Card className="grid items-center gap-6 md:grid-cols-3">
        <img src={directorImage} alt={t('chairman.name')} loading="lazy" className="h-44 w-44 rounded-full object-contain" />
        <div className="md:col-span-2">
          <h2 className="text-2xl font-bold text-brand-darkText">{t('chairman.name')}</h2>
          <p className="mt-2 text-sm text-brand-secondaryText">{t('chairman.designation')}</p>
          <p className="mt-4 text-sm leading-7 text-brand-secondaryText md:text-base">{t('chairman.message')}</p>
        </div>
      </Card>
    </div>
  );
};

export default ChairmanMessage;
