import { useLanguage } from '../context/LanguageContext';
import { useTranslation } from 'react-i18next';

type DepositCardProps = {
  titleMr: string;
  titleEn: string;
  descriptionMr: string;
  descriptionEn: string;
  interestRate: string;
};

const DepositCard = ({ titleMr, titleEn, descriptionMr, descriptionEn, interestRate }: DepositCardProps) => {
  const { language } = useLanguage();
  const isMarathi = language === 'mr';
  const { t } = useTranslation();

  return (
    <article className="bank-card flex h-full flex-col">
      <div className="mb-4 flex h-36 items-center justify-center rounded-xl border border-dashed border-blue-200 bg-blue-50 text-xs text-slate-500">
        {isMarathi ? t('deposits.heading') : t('deposits.heading')}
      </div>

      <h3 className="text-lg font-semibold text-brand-primary">{isMarathi ? titleMr : titleEn}</h3>
      <p className="mt-2 text-sm leading-6 text-slate-600">{isMarathi ? descriptionMr : descriptionEn}</p>

      <div className="mt-4 rounded-xl bg-blue-50 p-3 text-sm">
        <p className="text-slate-500">{t('common.interestRate')}</p>
        <p className="text-xl font-bold text-brand-secondary">{interestRate}</p>
      </div>

      <button className="mt-5 w-fit rounded-lg bg-brand-primary px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-700">
        {t('common.learnMore')}
      </button>
    </article>
  );
};

export default DepositCard;
