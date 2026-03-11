type ServiceCardProps = {
  title: string;
  description: string;
  icon: string;
};

const ServiceCard = ({ title, description, icon }: ServiceCardProps) => {
  return (
    <article className="bank-card">
      <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-2xl">
        {icon}
      </div>
      <h3 className="text-lg font-semibold text-brand-primary">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-slate-600">{description}</p>
    </article>
  );
};

export default ServiceCard;
