import { useTranslation } from 'react-i18next';
import PageHero from '../components/PageHero';
import SectionTitle from '../components/SectionTitle';
import FaqSection from '../components/FaqSection';
import NoticeBoard from '../components/NoticeBoard';
import { useSeo } from '../hooks/useSeo';

const MemberServices = () => {
  const { t } = useTranslation();

  useSeo({
    title: 'Member Services | Yashada Bank',
    description: 'Member support services, frequently asked questions, and notice board updates.',
    path: '/member-services'
  });

  return (
    <div className="bank-container space-y-10 py-10">
      <PageHero title={t('members.heading')} description={t('members.description')} />

      <section>
        <SectionTitle title={t('members.faq')} />
        <div className="mt-6">
          <FaqSection />
        </div>
      </section>

      <section>
        <SectionTitle title={t('members.notice')} />
        <div className="mt-6">
          <NoticeBoard />
        </div>
      </section>
    </div>
  );
};

export default MemberServices;
