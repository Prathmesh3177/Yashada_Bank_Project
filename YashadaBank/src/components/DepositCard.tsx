type DepositCardProps = {
  title: string;
  description: string;
  interestRate: string;
};

const DepositCard = ({ title, description, interestRate }: DepositCardProps) => {
  return (
    <article className="bank-card flex h-full flex-col">
      <div className="mb-4 flex h-36 items-center justify-center rounded-xl border border-dashed border-blue-200 bg-blue-50 text-xs text-slate-500">
        {/* Add deposit scheme image */}
      </div>

      <h3 className="text-lg font-semibold text-brand-primary">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-slate-600">{description}</p>

      <div className="mt-4 rounded-xl bg-blue-50 p-3 text-sm">
        <p className="text-slate-500">Interest Rate Example</p>
        <p className="text-xl font-bold text-brand-secondary">{interestRate}</p>
      </div>

      <button className="mt-5 w-fit rounded-lg bg-brand-primary px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-700">
        अधिक माहिती
      </button>
    </article>
  );
};

export default DepositCard;
