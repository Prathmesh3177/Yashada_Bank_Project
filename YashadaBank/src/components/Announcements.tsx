import { MegaphoneIcon } from '@heroicons/react/24/outline';
import { useTranslation } from 'react-i18next';
import { announcements } from '../data/siteData';
import Card from './Card';

const Announcements = () => {
  const { i18n, t } = useTranslation();
  const isMr = i18n.language === 'mr';

  return (
    <section>
      <h2 className="text-2xl font-bold text-brand-darkText md:text-3xl">{t('home.announcements')}</h2>
      <div className="mt-6 grid gap-4 md:grid-cols-3">
        {announcements.map((item) => (
          <Card key={item.id}>
            <MegaphoneIcon className="h-6 w-6 text-brand-primary" />
            <p className="mt-3 text-xs font-semibold uppercase text-brand-secondaryText">{item.date}</p>
            <p className="mt-2 text-sm text-brand-darkText">{isMr ? item.title.mr : item.title.en}</p>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Announcements;
