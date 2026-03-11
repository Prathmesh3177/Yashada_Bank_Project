import { useTranslation } from 'react-i18next';
import PageHero from '../components/PageHero';
import FadeInSection from '../components/FadeInSection';

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
  const { i18n } = useTranslation();
  const isMarathi = i18n.language === 'mr';

  return (
    <section className="bank-container space-y-10 py-12 md:py-16">
      <PageHero
        title={isMarathi ? 'गॅलरी' : 'Gallery'}
        description={isMarathi ? 'आमच्या बँकेचे कार्यक्रम, उपक्रम आणि संस्मरणीय क्षण.' : 'Programs, initiatives, and memorable moments of our bank.'}
      />

      <FadeInSection>
        <div className="rounded-2xl border border-red-100 bg-white p-5 shadow-card">
          <div className="flex h-56 items-center justify-center rounded-xl border border-dashed border-red-200 text-base text-brand-secondaryText">
            {isMarathi ? 'गॅलरी बॅनर प्रतिमा' : 'Gallery Banner Image'}
          </div>
        </div>
      </FadeInSection>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {galleryItems.map((item) => (
          <article
            key={item.captionMr}
            className="group overflow-hidden rounded-2xl border border-red-100 bg-white shadow-card transition duration-300 hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="relative h-56 overflow-hidden">
              <div className="flex h-full items-center justify-center bg-red-50 text-base text-slate-500">
                {isMarathi ? 'फोटो येथे जोडा' : 'Add Photo Here'}
              </div>
            </div>
            <div className="p-4">
              <h2 className="text-lg font-semibold text-brand-primary">{isMarathi ? item.captionMr : item.captionEn}</h2>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
