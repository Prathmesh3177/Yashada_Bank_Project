import { useLanguage } from '../context/LanguageContext';

const services = [
  { titleMr: 'आधार बँकिंग', titleEn: 'Aadhaar Banking', icon: '🪪' },
  { titleMr: 'मिनी एटीएम', titleEn: 'Mini ATM', icon: '🏧' },
  { titleMr: 'इंटरनेट बँकिंग', titleEn: 'Internet Banking', icon: '🌐' },
  { titleMr: 'मोबाईल बँकिंग', titleEn: 'Mobile Banking', icon: '📱' },
  { titleMr: 'एसएमएस बँकिंग', titleEn: 'SMS Banking', icon: '💬' },
  { titleMr: 'आरटीजीएस', titleEn: 'RTGS', icon: '🏛️' },
  { titleMr: 'एनईएफटी', titleEn: 'NEFT', icon: '🔁' },
  { titleMr: 'आयएमपीएस', titleEn: 'IMPS', icon: '⚡' },
  { titleMr: 'क्यूआर पेमेंट', titleEn: 'QR Payment', icon: '🔳' }
];

const Services = () => {
  const { language } = useLanguage();
  const isMarathi = language === 'mr';

  return (
    <section className="bank-container py-12 md:py-16">
      <div className="grid items-center gap-8 rounded-3xl bg-gradient-to-r from-brand-primary to-brand-secondary p-8 text-white shadow-card lg:grid-cols-2">
        <div>
          <h1 className="text-3xl font-extrabold leading-tight md:text-4xl">{isMarathi ? 'आमच्या सेवा' : 'Our Services'}</h1>
          <p className="mt-3 text-sm text-blue-100 md:text-base">
            {isMarathi
              ? 'आपल्या दैनंदिन बँकिंगसाठी सुरक्षित आणि वेगवान सुविधा.'
              : 'Safe and fast facilities for your daily banking needs.'}
          </p>
        </div>

        <div className="rounded-2xl border border-white/20 bg-white/10 p-5">
          <div className="flex h-56 items-center justify-center rounded-xl border border-dashed border-white/40 text-sm text-blue-100">
            {isMarathi ? 'बँकिंग सेवा प्रतिमा' : 'Banking Services Image'}
          </div>
        </div>
      </div>

      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <article key={service.titleMr} className="bank-card flex items-center gap-4 p-5">
            <div className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-2xl">
              {service.icon}
            </div>
            <h2 className="text-base font-semibold text-brand-primary md:text-lg">{isMarathi ? service.titleMr : service.titleEn}</h2>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Services;
