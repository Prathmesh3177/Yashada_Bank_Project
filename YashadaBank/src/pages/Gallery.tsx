import { useLanguage } from '../context/LanguageContext';

const galleryItems = [
  {
    captionMr: 'नवीन शाखा उद्घाटन सोहळा',
    captionEn: 'New Branch Inauguration'
  },
  {
    captionMr: 'ग्राहक मेळाव्यातील क्षण',
    captionEn: 'Moments from Customer Meet'
  },
  {
    captionMr: 'कृषी कर्ज शिबिर मार्गदर्शन',
    captionEn: 'Agriculture Loan Camp Guidance'
  },
  {
    captionMr: 'महिला बचत गट कार्यक्रम',
    captionEn: 'Women Savings Group Program'
  },
  {
    captionMr: 'डिजिटल बँकिंग कार्यशाळा',
    captionEn: 'Digital Banking Workshop'
  },
  {
    captionMr: 'वार्षिक सर्वसाधारण सभेची झलक',
    captionEn: 'Annual General Meeting Highlights'
  }
];

const Gallery = () => {
  const { language } = useLanguage();
  const isMarathi = language === 'mr';

  return (
    <section className="bank-container py-12 md:py-16">
      <div className="grid items-center gap-8 rounded-3xl bg-gradient-to-r from-brand-primary to-brand-secondary p-8 text-white shadow-card lg:grid-cols-2">
        <div>
          <h1 className="text-3xl font-extrabold leading-tight md:text-4xl">{isMarathi ? 'गॅलरी' : 'Gallery'}</h1>
          <p className="mt-3 text-sm text-blue-100 md:text-base">
            {isMarathi
              ? 'आमच्या बँकेचे कार्यक्रम, उपक्रम आणि संस्मरणीय क्षण.'
              : 'Programs, initiatives, and memorable moments of our bank.'}
          </p>
        </div>

        <div className="rounded-2xl border border-white/20 bg-white/10 p-5">
          <div className="flex h-56 items-center justify-center rounded-xl border border-dashed border-white/40 text-sm text-blue-100">
            {isMarathi ? 'गॅलरी बॅनर प्रतिमा' : 'Gallery Banner Image'}
          </div>
        </div>
      </div>

      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {galleryItems.map((item) => (
          <article key={item.captionMr} className="group overflow-hidden rounded-2xl border border-blue-100 bg-white shadow-card">
            <div className="relative h-56 overflow-hidden">
              <div className="flex h-full items-center justify-center bg-blue-50 text-sm text-slate-500">
                {isMarathi ? 'फोटो येथे जोडा' : 'Add Photo Here'}
              </div>
            </div>
            <div className="p-4">
              <h2 className="text-base font-semibold text-brand-primary">{isMarathi ? item.captionMr : item.captionEn}</h2>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
