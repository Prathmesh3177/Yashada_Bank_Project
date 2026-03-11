import { useTranslation } from 'react-i18next';
import PageHero from '../components/PageHero';
import Card from '../components/Card';
import { useSeo } from '../hooks/useSeo';

const boardMembers = [
  { name: 'Prof. Sudhir D. Saste', roleKey: 'board.roles.chairman' },
  { name: 'Mrs. Vaishali Patil', roleKey: 'board.roles.viceChairperson' },
  { name: 'Mr. Santosh Jadhav', roleKey: 'board.roles.director' },
  { name: 'Mrs. Rutuja Deshmukh', roleKey: 'board.roles.director' },
  { name: 'Mr. Nilesh Kulkarni', roleKey: 'board.roles.independentDirector' },
  { name: 'Mr. Amol Pawar', roleKey: 'board.roles.managingDirector' }
];

const BoardOfDirectors = () => {
  const { t } = useTranslation();

  useSeo({
    title: 'Board of Directors | Yashada Bank',
    description: 'Leadership team and board members of Yashada Multistate Cooperative Credit Society.',
    path: '/board-of-directors'
  });

  return (
    <div className="bank-container space-y-10 py-10">
      <PageHero title={t('board.heading')} description={t('site.tagline')} />

      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {boardMembers.map((member) => (
          <Card key={member.name}>
            <h2 className="text-lg font-bold text-brand-darkText">{member.name}</h2>
            <p className="mt-2 text-sm text-brand-secondaryText">{t(member.roleKey)}</p>
          </Card>
        ))}
      </section>
    </div>
  );
};

export default BoardOfDirectors;
