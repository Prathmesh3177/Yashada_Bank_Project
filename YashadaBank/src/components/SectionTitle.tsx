type SectionTitleProps = {
  title: string;
  subtitle?: string;
};

const SectionTitle = ({ title, subtitle }: SectionTitleProps) => (
  <div>
    <h2 className="text-3xl font-bold text-brand-darkText md:text-4xl">{title}</h2>
    {subtitle ? <p className="mt-2 text-base text-brand-secondaryText md:text-lg">{subtitle}</p> : null}
  </div>
);

export default SectionTitle;
