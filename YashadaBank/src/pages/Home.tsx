import {
  BanknotesIcon,
  BuildingLibraryIcon,
  CreditCardIcon,
  DevicePhoneMobileIcon,
  UserGroupIcon
} from '@heroicons/react/24/outline';
import { BadgePercent, Clock3, Handshake, Landmark, ShieldCheck, Smartphone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import PageHero from '../components/PageHero';
import Card from '../components/Card';
import SectionTitle from '../components/SectionTitle';
import LoanEmiCalculator from '../components/LoanEmiCalculator';
import Announcements from '../components/Announcements';
import FacebookUpdates from '../components/FacebookUpdates';
import BranchGrid from '../components/BranchGrid';
import FadeInSection from '../components/FadeInSection';
import { useSeo, getOrganizationSchema } from '../hooks/useSeo';

const Home = () => {
  const { t } = useTranslation();

  useSeo({
    title: 'Yashada Bank | Multi-State Cooperative Credit Society',
    description: 'Trusted cooperative credit services in Maharashtra for deposits, loans, member support, and branch banking.',
    path: '/'
  });

  const quickServices = [
    { icon: BuildingLibraryIcon, label: t('home.quick.savings') },
    { icon: BanknotesIcon, label: t('home.quick.fixedDeposit') },
    { icon: CreditCardIcon, label: t('home.quick.loan') },
    { icon: DevicePhoneMobileIcon, label: t('home.quick.mobile') },
    { icon: UserGroupIcon, label: t('home.quick.memberSupport') }
  ];

  const depositList = [t('home.deposits.recurring'), t('home.deposits.fixed'), t('home.deposits.monthly')];
  const loanList = [t('loan.gold'), t('loan.personal'), t('loan.vehicle'), t('loan.business')];
  const whyChoose = [
    {
      icon: ShieldCheck,
      title: t('home.whyChoose.items.trustedTitle'),
      subtitle: t('home.whyChoose.items.trustedSubtitle')
    },
    {
      icon: Landmark,
      title: t('home.whyChoose.items.networkTitle'),
      subtitle: t('home.whyChoose.items.networkSubtitle')
    },
    { icon: Clock3, title: t('home.whyChoose.items.fastTitle'), subtitle: t('home.whyChoose.items.fastSubtitle') },
    {
      icon: Handshake,
      title: t('home.whyChoose.items.relationshipTitle'),
      subtitle: t('home.whyChoose.items.relationshipSubtitle')
    },
    { icon: BadgePercent, title: t('home.whyChoose.items.ratesTitle'), subtitle: t('home.whyChoose.items.ratesSubtitle') },
    { icon: Smartphone, title: t('home.whyChoose.items.digitalTitle'), subtitle: t('home.whyChoose.items.digitalSubtitle') }
  ];

  return (
    <div className="space-y-14 py-10">
      <FadeInSection className="bank-container">
        <PageHero
          title={t('home.title')}
          description={t('home.subtitle')}
          actions={
            <>
              <Link to="/contact-us" className="rounded-md bg-white px-5 py-2.5 text-base font-semibold text-brand-primary">
                {t('home.ctaPrimary')}
              </Link>
              <Link
                to="/loan-services"
                className="rounded-md border border-white/60 px-5 py-2.5 text-base font-semibold text-white"
              >
                {t('home.ctaSecondary')}
              </Link>
            </>
          }
        />
      </FadeInSection>

      <FadeInSection className="bank-container">
        <SectionTitle title={t('home.quickServices')} />
        <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-5">
          {quickServices.map((item) => (
            <Card key={item.label} className="transition duration-300 hover:-translate-y-1 hover:shadow-lg">
              <item.icon className="h-7 w-7 text-brand-primary" />
              <p className="mt-3 text-base font-semibold text-brand-darkText">{item.label}</p>
            </Card>
          ))}
        </div>
      </FadeInSection>

      <FadeInSection className="bank-container">
        <SectionTitle title={t('home.whyChoose.title')} />
        <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
          {whyChoose.map((item) => (
            <Card key={item.title} className="transition duration-300 hover:-translate-y-1 hover:shadow-lg">
              <item.icon className="h-7 w-7 text-brand-primary" />
              <h3 className="mt-3 text-lg font-bold text-brand-darkText">{item.title}</h3>
              <p className="mt-2 text-base text-brand-secondaryText">{item.subtitle}</p>
            </Card>
          ))}
        </div>
      </FadeInSection>

      <FadeInSection className="bank-container grid gap-6 lg:grid-cols-2">
        <div>
          <SectionTitle title={t('home.depositOverview')} />
          <div className="mt-6 grid gap-4">
            {depositList.map((item) => (
              <Card key={item} className="transition duration-300 hover:-translate-y-1 hover:shadow-lg">
                <h3 className="text-lg font-bold text-brand-darkText">{item}</h3>
                <p className="mt-1 text-base text-brand-secondaryText">{t('home.deposits.desc')}</p>
              </Card>
            ))}
          </div>
        </div>

        <div>
          <SectionTitle title={t('home.loanOverview')} />
          <div className="mt-6 grid gap-4">
            {loanList.map((item) => (
              <Card key={item} className="transition duration-300 hover:-translate-y-1 hover:shadow-lg">
                <h3 className="text-lg font-bold text-brand-darkText">{item}</h3>
                <p className="mt-1 text-base text-brand-secondaryText">{t('loan.description')}</p>
              </Card>
            ))}
          </div>
        </div>
      </FadeInSection>

      <FadeInSection className="bank-container">
        <SectionTitle title={t('home.emiPreview')} />
        <div className="mt-6">
          <LoanEmiCalculator />
        </div>
      </FadeInSection>

      <FadeInSection className="bank-container">
        <Announcements />
      </FadeInSection>

      <FadeInSection className="bank-container">
        <FacebookUpdates />
      </FadeInSection>

      <FadeInSection className="bank-container">
        <SectionTitle title="आमची मुख्य शाखा (Main Branch Location)" />
        <div className="mt-6 overflow-hidden rounded-3xl border border-red-100 bg-white p-4 shadow-card md:p-5">
          <iframe
            title="Yashada Dharashiv Main Branch Map"
            width="100%"
            height="400"
            loading="lazy"
            className="w-full rounded-2xl"
            style={{ border: 0 }}
            allowFullScreen
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3790.467662956637!2d76.03578217474092!3d18.188420682841855!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc5a3d32828fb1f%3A0xe0d0bf8f2cd1caf6!2sYashada%20multi-state%20co-op!5e0!3m2!1sen!2sin!4v1773251013053!5m2!1sen!2sin"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </FadeInSection>

      <FadeInSection className="bank-container">
        <SectionTitle title="आमच्या कार्यरत शाखा" />
        <div className="mt-6">
          <BranchGrid highlightMain />
        </div>
      </FadeInSection>

      <script type="application/ld+json">{JSON.stringify(getOrganizationSchema())}</script>
    </div>
  );
};

export default Home;
