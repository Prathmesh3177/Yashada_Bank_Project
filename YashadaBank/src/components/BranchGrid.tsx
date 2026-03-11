import { MapPinIcon } from '@heroicons/react/24/outline';
import { useTranslation } from 'react-i18next';
import { branches } from '../data/siteData';
import Card from './Card';

type BranchGridProps = {
  limit?: number;
  highlightMain?: boolean;
};

const BranchGrid = ({ limit, highlightMain = false }: BranchGridProps) => {
  const { i18n, t } = useTranslation();
  const isMr = i18n.language === 'mr';
  const list = limit ? branches.slice(0, limit) : branches;

  if (highlightMain && list.length > 0) {
    const [mainBranch, ...otherBranches] = list;

    return (
      <div className="space-y-6">
        <Card className="rounded-3xl border-red-200 p-6 shadow-lg md:p-8">
          <MapPinIcon className="h-7 w-7 text-brand-primary" />
          <p className="mt-3 text-base font-semibold uppercase tracking-wide text-brand-primary">कार्यरत शाखा</p>
          <h3 className="mt-2 text-2xl font-bold text-brand-darkText">{isMr ? mainBranch.name.mr : mainBranch.name.en}</h3>
          <p className="mt-4 whitespace-pre-line text-base leading-7 text-brand-secondaryText md:text-lg">
            {isMr ? mainBranch.address.mr : mainBranch.address.en}
          </p>
          <p className="mt-4 text-base font-semibold text-brand-darkText">फोन क्रमांक: {mainBranch.phone.replace('+91 ', '')}</p>
          <p className="mt-2 text-base font-semibold text-brand-darkText">ई-मेल: yashadamultistate@yahoo.in</p>
          <a
            href={mainBranch.mapUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-4 inline-block text-base font-semibold text-brand-primary transition hover:text-brand-dark hover:underline"
          >
            {t('common.openMap')}
          </a>
        </Card>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
          {otherBranches.map((branch) => (
            <Card key={branch.id} className="transition duration-300 hover:-translate-y-1 hover:shadow-lg">
              <MapPinIcon className="h-6 w-6 text-brand-primary" />
              <h3 className="mt-3 text-lg font-bold text-brand-darkText">{isMr ? branch.name.mr : branch.name.en}</h3>
              <p className="mt-2 whitespace-pre-line text-base leading-6 text-brand-secondaryText">
                {isMr ? branch.address.mr : branch.address.en}
              </p>
              <p className="mt-3 text-base font-semibold text-brand-darkText">मो. क्रमांक: {branch.phone.replace('+91 ', '')}</p>
              <a
                href={branch.mapUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-block text-base font-semibold text-brand-primary transition hover:text-brand-dark hover:underline"
              >
                {t('common.openMap')}
              </a>
            </Card>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
      {list.map((branch) => (
        <Card key={branch.id} className="transition duration-300 hover:-translate-y-1 hover:shadow-lg">
          <MapPinIcon className="h-6 w-6 text-brand-primary" />
          <h3 className="mt-3 text-base font-bold text-brand-darkText">{isMr ? branch.name.mr : branch.name.en}</h3>
          <p className="mt-2 whitespace-pre-line text-base text-brand-secondaryText">{isMr ? branch.address.mr : branch.address.en}</p>
          <p className="mt-2 text-base font-semibold text-brand-darkText">
            {t('common.phone')}: {branch.phone}
          </p>
          <a
            href={branch.mapUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-4 inline-block text-base font-semibold text-brand-primary hover:underline"
          >
            {t('common.openMap')}
          </a>
        </Card>
      ))}
    </div>
  );
};

export default BranchGrid;
