import { useTranslation } from 'react-i18next';
import PageHero from '../components/PageHero';
import Card from '../components/Card';
import { useSeo } from '../hooks/useSeo';

const ComplaintForm = () => {
  const { t } = useTranslation();

  useSeo({
    title: 'Complaint Form | Yashada Bank',
    description: 'Submit service complaints or grievances for prompt resolution.',
    path: '/complaint-form'
  });

  return (
    <div className="bank-container space-y-10 py-10">
      <PageHero title={t('complaint.heading')} description={t('complaint.description')} />

      <Card>
        <form className="grid gap-4 md:grid-cols-2">
          <label className="text-sm text-brand-secondaryText">
            {t('contact.name')}
            <input className="mt-1 w-full rounded-lg border border-red-200 px-3 py-2 outline-none focus:ring-2 focus:ring-brand-primary" />
          </label>
          <label className="text-sm text-brand-secondaryText">
            {t('complaint.memberId')}
            <input className="mt-1 w-full rounded-lg border border-red-200 px-3 py-2 outline-none focus:ring-2 focus:ring-brand-primary" />
          </label>
          <label className="text-sm text-brand-secondaryText">
            {t('common.phone')}
            <input className="mt-1 w-full rounded-lg border border-red-200 px-3 py-2 outline-none focus:ring-2 focus:ring-brand-primary" />
          </label>
          <label className="text-sm text-brand-secondaryText">
            {t('complaint.category')}
            <select className="mt-1 w-full rounded-lg border border-red-200 px-3 py-2 outline-none focus:ring-2 focus:ring-brand-primary">
              <option>{t('complaint.categoryOptions.account')}</option>
              <option>{t('complaint.categoryOptions.loan')}</option>
              <option>{t('complaint.categoryOptions.digital')}</option>
              <option>{t('complaint.categoryOptions.other')}</option>
            </select>
          </label>
          <label className="text-sm text-brand-secondaryText md:col-span-2">
            {t('complaint.details')}
            <textarea
              rows={5}
              className="mt-1 w-full rounded-lg border border-red-200 px-3 py-2 outline-none focus:ring-2 focus:ring-brand-primary"
            />
          </label>
          <button
            type="button"
            className="w-fit rounded-md bg-brand-primary px-4 py-2 text-sm font-semibold text-white transition hover:bg-brand-dark"
          >
            {t('common.submit')}
          </button>
        </form>
      </Card>
    </div>
  );
};

export default ComplaintForm;
