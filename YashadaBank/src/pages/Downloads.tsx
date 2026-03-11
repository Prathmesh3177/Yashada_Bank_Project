import { ArrowDownTrayIcon } from '@heroicons/react/24/outline';
import { useTranslation } from 'react-i18next';
import { downloadForms } from '../data/siteData';
import PageHero from '../components/PageHero';
import Card from '../components/Card';
import { useSeo } from '../hooks/useSeo';

const Downloads = () => {
  const { t } = useTranslation();

  useSeo({
    title: 'Downloads | Yashada Bank',
    description: 'Download member forms, loan application forms, and KYC update forms.',
    path: '/downloads'
  });

  return (
    <div className="bank-container space-y-10 py-10">
      <PageHero title={t('downloads.heading')} description={t('downloads.description')} />

      <section className="grid gap-4 md:grid-cols-3">
        {downloadForms.map((item) => (
          <Card key={item.id}>
            <h2 className="text-lg font-bold text-brand-darkText">{t(`downloads.${item.key}`)}</h2>
            <a
              href={item.file}
              download
              className="mt-4 inline-flex items-center gap-2 rounded-md bg-brand-primary px-4 py-2 text-sm font-semibold text-white transition hover:bg-brand-dark"
            >
              <ArrowDownTrayIcon className="h-4 w-4" />
              {t('downloads.download')}
            </a>
          </Card>
        ))}
      </section>
    </div>
  );
};

export default Downloads;
