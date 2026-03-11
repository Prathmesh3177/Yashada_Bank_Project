import type { ReactNode } from 'react';

type CardProps = {
  children: ReactNode;
  className?: string;
};

const Card = ({ children, className = '' }: CardProps) => {
  return <article className={`rounded-2xl border border-red-100 bg-white p-5 shadow-card ${className}`}>{children}</article>;
};

export default Card;
