type BranchCardProps = {
  branchName: string;
  address: string;
  contact: string;
};

const BranchCard = ({ branchName, address, contact }: BranchCardProps) => {
  return (
    <article className="bank-card">
      <h3 className="text-lg font-semibold text-brand-primary">{branchName}</h3>
      <p className="mt-2 text-sm text-slate-600">{address}</p>
      <p className="mt-3 text-sm font-medium text-brand-secondary">{contact}</p>
    </article>
  );
};

export default BranchCard;
