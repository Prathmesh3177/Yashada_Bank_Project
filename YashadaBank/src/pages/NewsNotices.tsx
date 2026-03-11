import { useTranslation } from 'react-i18next';
import PageHero from '../components/PageHero';
import Announcements from '../components/Announcements';
import SectionTitle from '../components/SectionTitle';
import NoticeBoard from '../components/NoticeBoard';
import { useSeo } from '../hooks/useSeo';

const NewsNotices = () => {
  const { t } = useTranslation();

  useSeo({
    title: 'News & Notices | Yashada Bank',
    description: 'Read latest announcements and notice board updates from the society.',
    path: '/news-notices'
  });

  return (
    <div className="bank-container space-y-10 py-10">
      <PageHero title={t('news.heading')} description={t('news.description')} />

      <Announcements />

      <section>
        <SectionTitle title={t('news.notices')} />
        <div className="mt-6">
          <NoticeBoard />
        </div>
      </section>
    </div>
  );
};

export default NewsNotices;
