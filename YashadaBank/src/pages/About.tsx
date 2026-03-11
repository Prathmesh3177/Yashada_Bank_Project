import { useTranslation } from 'react-i18next';
import directorImage from '../assets/about-director-image-1.png';
import PageHero from '../components/PageHero';
import SectionTitle from '../components/SectionTitle';
import Card from '../components/Card';
import { useSeo } from '../hooks/useSeo';

const boardMembers = [
  { nameEn: 'Prof. Sudhir D. Saste', nameMr: 'प्रा. सुधीर डी. सस्ते', roleKey: 'board.roles.chairman' },
  { nameEn: 'Mrs. Vaishali Patil', nameMr: 'सौ. वैशाली पाटील', roleKey: 'board.roles.viceChairperson' },
  { nameEn: 'Mr. Santosh Jadhav', nameMr: 'श्री. संतोष जाधव', roleKey: 'board.roles.director' },
  { nameEn: 'Mrs. Rutuja Deshmukh', nameMr: 'सौ. ऋतुजा देशमुख', roleKey: 'board.roles.director' },
  { nameEn: 'Mr. Nilesh Kulkarni', nameMr: 'श्री. निलेश कुलकर्णी', roleKey: 'board.roles.independentDirector' },
  { nameEn: 'Mr. Amol Pawar', nameMr: 'श्री. अमोल पवार', roleKey: 'board.roles.managingDirector' }
];

const About = () => {
  const { t, i18n } = useTranslation();

  useSeo({
    title: 'About Us | Yashada Multistate Cooperative Credit Society',
    description: 'Learn about mission, vision, and social commitment of Yashada Multistate Cooperative Credit Society.',
    path: '/about-us'
  });

  return (
    <div className="bank-container space-y-10 py-10">
      <PageHero title={t('about.heading')} description={t('about.intro')} />

      <section>
        <SectionTitle title={t('about.missionTitle')} />
        <div className="mt-4">
          <Card>
            <p className="text-sm leading-7 text-brand-secondaryText md:text-base">{t('about.mission')}</p>
          </Card>
        </div>
      </section>

      <section>
        <SectionTitle title={t('about.visionTitle')} />
        <div className="mt-4">
          <Card>
            <p className="text-sm leading-7 text-brand-secondaryText md:text-base">{t('about.vision')}</p>
          </Card>
        </div>
      </section>

      <section>
        <SectionTitle title={t('chairman.heading')} />
        <Card className="mt-4 grid items-center gap-6 md:grid-cols-3">
          <img src={directorImage} alt={t('chairman.name')} loading="lazy" className="h-44 w-44 rounded-full object-contain" />
          <div className="md:col-span-2">
          <h2 className="text-2xl font-bold text-brand-darkText">{t('chairman.name')}</h2>
            <p className="mt-2 text-base text-brand-secondaryText">{t('chairman.designation')}</p>
            <p className="mt-4 text-base leading-7 text-brand-secondaryText md:text-lg">{t('chairman.message')}</p>
          </div>
        </Card>
      </section>

      <section>
        <SectionTitle title={t('board.heading')} />
        <div className="mt-4 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {boardMembers.map((member) => (
            <Card key={member.nameEn}>
              <h2 className="text-lg font-bold text-brand-darkText">{i18n.language === 'mr' ? member.nameMr : member.nameEn}</h2>
              <p className="mt-2 text-base text-brand-secondaryText">{t(member.roleKey)}</p>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
