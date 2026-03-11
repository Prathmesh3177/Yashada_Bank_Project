import { useTranslation } from 'react-i18next';
import { notices } from '../data/siteData';
import Card from './Card';

const NoticeBoard = () => {
  const { i18n, t } = useTranslation();
  const isMr = i18n.language === 'mr';

  return (
    <div className="grid gap-4">
      {notices.map((notice) => (
        <Card key={notice.id}>
          <p className="text-xs font-semibold uppercase tracking-wide text-brand-secondaryText">
            {t('common.date')}: {notice.date}
          </p>
          <p className="mt-2 text-sm text-brand-darkText">{isMr ? notice.text.mr : notice.text.en}</p>
        </Card>
      ))}
    </div>
  );
};

export default NoticeBoard;
