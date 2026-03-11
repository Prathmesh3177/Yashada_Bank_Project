import { useLanguage } from '../context/LanguageContext';

const branches = [
  {
    nameMr: 'धाराशिव मुख्य शाखा',
    nameEn: 'Dharashiv Main Branch',
    addressMr: 'यशदा हाईटस्, काकडे बिल्डींग, नाईकवाडी नगर, श्री विसर्जन विहीरी शेजारी धाराशिव -413501',
    addressEn: 'Yashada Heights, Kakade Building, Naikwadi Nagar, near Shri Visarjan Vihiri, Dharashiv - 413501',
    phone: '+91 12345 67890'
  },
  {
    nameMr: 'तुळजापूर शाखा',
    nameEn: 'Tuljapur Branch',
    addressMr: 'बस स्टँड जवळ, तुळजापूर, महाराष्ट्र',
    addressEn: 'Near Bus Stand, Tuljapur, Maharashtra',
    phone: '+91 98765 43210'
  },
  {
    nameMr: 'कळंब शाखा',
    nameEn: 'Kalamb Branch',
    addressMr: 'मुख्य बाजारपेठ, कळंब, महाराष्ट्र',
    addressEn: 'Main Market, Kalamb, Maharashtra',
    phone: '+91 99887 77665'
  },
  {
    nameMr: 'भूम शाखा',
    nameEn: 'Bhoom Branch',
    addressMr: 'नगर रोड, भूम, महाराष्ट्र',
    addressEn: 'Nagar Road, Bhoom, Maharashtra',
    phone: '+91 90909 80808'
  }
];

const Contact = () => {
  const { language } = useLanguage();
  const isMarathi = language === 'mr';

  return (
    <section className="bank-container py-12 md:py-16">
      <div className="grid items-center gap-8 rounded-3xl bg-gradient-to-r from-brand-primary to-brand-secondary p-8 text-white shadow-card lg:grid-cols-2">
        <div>
          <h1 className="text-3xl font-extrabold leading-tight md:text-4xl">{isMarathi ? 'संपर्क करा' : 'Contact Us'}</h1>
          <p className="mt-3 text-sm text-blue-100 md:text-base">
            {isMarathi
              ? 'आपल्या प्रश्नांसाठी आणि माहितीसाठी आमची टीम नेहमी तत्पर आहे.'
              : 'Our team is always ready to assist with your questions and information needs.'}
          </p>
        </div>

        <div className="rounded-2xl border border-white/20 bg-white/10 p-5">
          <div className="flex h-56 items-center justify-center rounded-xl border border-dashed border-white/40 text-sm text-blue-100">
            {isMarathi ? 'संपर्क बॅनर प्रतिमा' : 'Contact Banner Image'}
          </div>
        </div>
      </div>

      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        <article className="bank-card">
          <h2 className="text-xl font-semibold text-brand-primary">{isMarathi ? 'मुख्य कार्यालय पत्ता' : 'Head Office Address'}</h2>
          <div className="mt-5 space-y-3 text-sm text-slate-700 md:text-base">
            <p>
              <span className="font-semibold text-slate-900">{isMarathi ? 'पत्ता' : 'Address'}:</span>{' '}
              {isMarathi
                ? 'यशदा हाईटस्, काकडे बिल्डींग, नाईकवाडी नगर, श्री विसर्जन विहीरी शेजारी धाराशिव -413501'
                : 'Yashada Heights, Kakade Building, Naikwadi Nagar, near Shri Visarjan Vihiri, Dharashiv - 413501'}
            </p>
            <p>
              <span className="font-semibold text-slate-900">{isMarathi ? 'फोन' : 'Phone'}:</span> +91 12345 67890
            </p>
            <p>
              <span className="font-semibold text-slate-900">{isMarathi ? 'ईमेल' : 'Email'}:</span> info@yashadabank.in
            </p>
          </div>
        </article>

        <form className="bank-card space-y-4">
          <h2 className="text-xl font-semibold text-brand-primary">{isMarathi ? 'संदेश पाठवा' : 'Send Message'}</h2>
          <input
            type="text"
            placeholder={isMarathi ? 'नाव' : 'Name'}
            className="w-full rounded-xl border border-blue-200 px-4 py-3 text-sm outline-none ring-brand-secondary transition focus:ring-2"
          />
          <input
            type="tel"
            placeholder={isMarathi ? 'फोन' : 'Phone'}
            className="w-full rounded-xl border border-blue-200 px-4 py-3 text-sm outline-none ring-brand-secondary transition focus:ring-2"
          />
          <input
            type="email"
            placeholder={isMarathi ? 'ईमेल' : 'Email'}
            className="w-full rounded-xl border border-blue-200 px-4 py-3 text-sm outline-none ring-brand-secondary transition focus:ring-2"
          />
          <textarea
            rows={5}
            placeholder={isMarathi ? 'संदेश' : 'Message'}
            className="w-full rounded-xl border border-blue-200 px-4 py-3 text-sm outline-none ring-brand-secondary transition focus:ring-2"
          />
          <button
            type="button"
            className="rounded-full bg-brand-primary px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-800"
          >
            {isMarathi ? 'सबमिट करा' : 'Submit'}
          </button>
        </form>
      </div>

      <section className="mt-10">
        <h2 className="section-title">{isMarathi ? 'शाखा लोकेटर' : 'Branch Locator'}</h2>

        <div className="mt-6 rounded-2xl border border-blue-100 bg-white p-4 shadow-card">
          <div className="flex h-64 items-center justify-center rounded-xl border border-dashed border-blue-300 bg-blue-50 text-sm text-slate-500">
            {isMarathi ? 'गूगल मॅप येथे जोडा' : 'Add Google Map Here'}
          </div>
        </div>

        <div className="mt-6 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {branches.map((branch) => (
            <article key={branch.nameMr} className="bank-card p-5">
              <h3 className="text-base font-semibold text-brand-primary">{isMarathi ? branch.nameMr : branch.nameEn}</h3>
              <p className="mt-2 text-sm text-slate-600">{isMarathi ? branch.addressMr : branch.addressEn}</p>
              <p className="mt-2 text-sm font-medium text-slate-700">{isMarathi ? 'फोन' : 'Phone'}: {branch.phone}</p>
            </article>
          ))}
        </div>
      </section>
    </section>
  );
};

export default Contact;
