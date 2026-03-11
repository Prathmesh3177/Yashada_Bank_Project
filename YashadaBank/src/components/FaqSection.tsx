import { useState } from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import { useTranslation } from 'react-i18next';
import { faqItems } from '../data/siteData';
import Card from './Card';

const FaqSection = () => {
  const { i18n } = useTranslation();
  const [openId, setOpenId] = useState<string | null>(faqItems[0]?.id ?? null);
  const isMr = i18n.language === 'mr';

  return (
    <div className="space-y-3">
      {faqItems.map((item) => {
        const isOpen = openId === item.id;

        return (
          <Card key={item.id} className="p-0">
            <button
              type="button"
              className="flex w-full items-center justify-between px-5 py-4 text-left"
              onClick={() => setOpenId(isOpen ? null : item.id)}
            >
              <span className="text-sm font-semibold text-brand-darkText md:text-base">
                {isMr ? item.question.mr : item.question.en}
              </span>
              <ChevronDownIcon className={`h-5 w-5 text-brand-primary transition ${isOpen ? 'rotate-180' : ''}`} />
            </button>
            {isOpen ? (
              <p className="border-t border-red-100 px-5 py-4 text-sm text-brand-secondaryText">
                {isMr ? item.answer.mr : item.answer.en}
              </p>
            ) : null}
          </Card>
        );
      })}
    </div>
  );
};

export default FaqSection;
