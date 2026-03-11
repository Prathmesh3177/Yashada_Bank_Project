import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="bank-container pt-10">
      <div className="overflow-hidden rounded-3xl bg-gradient-to-r from-brand-primary to-brand-secondary text-white shadow-card">
        <div className="grid items-center gap-10 px-6 py-12 md:grid-cols-2 md:px-12">
          <div>
            <p className="inline-block rounded-full bg-white/20 px-4 py-1 text-xs font-semibold uppercase tracking-wide">
              विश्वासार्ह सहकारी बँकिंग
            </p>
            <h1 className="mt-4 text-3xl font-extrabold leading-tight md:text-5xl">
              धाराशिवच्या प्रगतीसाठी आधुनिक बँकिंग
            </h1>
            <p className="mt-4 text-sm text-blue-100 md:text-base">
              बचत, कर्ज, ठेवी आणि डिजिटल सेवांसह तुमच्या प्रत्येक आर्थिक गरजेसाठी विश्वासार्ह भागीदार.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                to="/services"
                className="rounded-full bg-brand-accent px-5 py-2.5 text-sm font-semibold text-slate-900"
              >
                सेवा पहा
              </Link>
              <Link
                to="/contact"
                className="rounded-full border border-white/40 px-5 py-2.5 text-sm font-semibold text-white"
              >
                संपर्क करा
              </Link>
            </div>
          </div>

          <div className="rounded-2xl border border-white/20 bg-white/10 p-6">
            {/* Add bank image here */}
            <div className="flex h-56 items-center justify-center rounded-xl border border-dashed border-white/40 bg-white/5 text-sm text-blue-100">
              बँकेचा मुख्य फोटो येथे जोडा
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
