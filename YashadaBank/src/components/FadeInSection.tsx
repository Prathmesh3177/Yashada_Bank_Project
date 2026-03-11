import { useEffect, useRef, useState, type ReactNode } from 'react';

type FadeInSectionProps = {
  children: ReactNode;
  className?: string;
};

const FadeInSection = ({ children, className = '' }: FadeInSectionProps) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={`fade-section ${isVisible ? 'is-visible' : ''} ${className}`}>
      {children}
    </div>
  );
};

export default FadeInSection;
