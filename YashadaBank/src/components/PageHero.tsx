import type { ReactNode } from 'react';

type PageHeroProps = {
  title: string;
  description: string;
  actions?: ReactNode;
};

const PageHero = ({ title, description, actions }: PageHeroProps) => (
  <section className="rounded-3xl bg-gradient-to-r from-brand-primary to-brand-dark px-6 py-10 text-white md:px-10 md:py-14">
    <h1 className="text-3xl font-extrabold md:text-5xl">{title}</h1>
    <p className="mt-3 max-w-3xl text-sm text-red-100 md:text-base">{description}</p>
    {actions ? <div className="mt-6 flex flex-wrap gap-3">{actions}</div> : null}
  </section>
);

export default PageHero;
