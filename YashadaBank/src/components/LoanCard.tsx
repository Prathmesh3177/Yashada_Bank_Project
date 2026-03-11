import type { ComponentType, SVGProps } from 'react';

type LoanCardProps = {
  loanType: string;
  description: string;
  Icon: ComponentType<SVGProps<SVGSVGElement>>;
};

const LoanCard = ({ loanType, description, Icon }: LoanCardProps) => {
  return (
    <article className="rounded-2xl border border-blue-100 bg-white p-6 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-brand-primary">
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="text-lg font-semibold text-brand-primary">{loanType}</h3>
      <p className="mt-3 text-sm leading-6 text-slate-600">{description}</p>
      <div className="mt-5">
        <button
          type="button"
          className="rounded-lg bg-brand-primary px-4 py-2 text-sm font-medium text-white shadow-md transition hover:bg-blue-700"
        >
          अधिक माहिती
        </button>
      </div>
    </article>
  );
};

export default LoanCard;
