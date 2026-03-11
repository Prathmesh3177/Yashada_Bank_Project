import type { FormEvent } from 'react';
import { Mail, MapPin, Phone, ShieldAlert } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import PageHero from '../components/PageHero';
import Card from '../components/Card';
import SectionTitle from '../components/SectionTitle';
import BranchGrid from '../components/BranchGrid';
import FadeInSection from '../components/FadeInSection';
import { useSeo } from '../hooks/useSeo';

const Contact = () => {
  const { t } = useTranslation();
  const inputClass =
    'mt-1.5 w-full rounded-xl border border-red-200 bg-white px-3 py-2.5 text-sm outline-none transition focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20';

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
    form.reset();
  };

  useSeo({
    title: 'Contact Us | Yashada Bank',
    description: 'Contact Yashada Multistate Cooperative Credit Society for account and loan support.',
    path: '/contact-us'
  });

  return (
    <div className="bank-container space-y-10 py-10">
      <PageHero title={t('contact.heading')} description={t('contact.description')} />

      <FadeInSection>
        <section className="grid gap-6 xl:grid-cols-2">
          <Card className="rounded-3xl p-6 shadow-lg">
            <h2 className="text-xl font-bold text-brand-darkText">{t('nav.contact')}</h2>
            <p className="mt-4 text-sm text-brand-secondaryText">कार्यरत शाखा</p>
            <h3 className="mt-1 text-lg font-bold text-brand-darkText">धाराशिव (मुख्य शाखा)</h3>
            <div className="mt-5 space-y-4 text-sm text-brand-secondaryText">
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-brand-primary" />
                <p className="whitespace-pre-line">{t('contact.officeAddress')}</p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 shrink-0 text-brand-primary" />
                <p>+91 9881059007</p>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 shrink-0 text-brand-primary" />
                <p>yashadamultistate@yahoo.in</p>
              </div>
            </div>
          </Card>

          <Card className="rounded-3xl p-6 shadow-lg">
            <div className="mb-4 flex items-center gap-2">
              <ShieldAlert className="h-5 w-5 text-brand-primary" />
              <h2 className="text-xl font-bold text-brand-darkText">Complaint Form</h2>
            </div>
            <form className="grid gap-4 md:grid-cols-2" onSubmit={handleSubmit}>
              <label className="text-sm text-brand-secondaryText">
                Full Name
                <input required className={inputClass} />
              </label>
              <label className="text-sm text-brand-secondaryText">
                Mobile Number
                <input required type="tel" className={inputClass} />
              </label>
              <label className="text-sm text-brand-secondaryText md:col-span-2">
                Email
                <input required type="email" className={inputClass} />
              </label>
              <label className="text-sm text-brand-secondaryText md:col-span-2">
                Complaint Type
                <select required defaultValue="" className={inputClass}>
                  <option value="" disabled>
                    Select complaint type
                  </option>
                  <option>{t('complaint.categoryOptions.account')}</option>
                  <option>{t('complaint.categoryOptions.loan')}</option>
                  <option>{t('complaint.categoryOptions.digital')}</option>
                  <option>{t('complaint.categoryOptions.other')}</option>
                </select>
              </label>
              <label className="text-sm text-brand-secondaryText md:col-span-2">
                Message
                <textarea required rows={4} className={inputClass} />
              </label>
              <button
                type="submit"
                className="w-fit rounded-xl bg-brand-primary px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-brand-dark"
              >
                {t('common.submit')}
              </button>
            </form>
          </Card>
        </section>
      </FadeInSection>

      <FadeInSection>
        <section>
          <SectionTitle title="आमची मुख्य शाखा (Main Branch Location)" />
          <div className="mt-6 overflow-hidden rounded-3xl border border-red-100 bg-white p-4 shadow-card">
            <iframe
              title="Main Branch Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3790.467662956637!2d76.03578217474092!3d18.188420682841855!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc5a3d32828fb1f%3A0xe0d0bf8f2cd1caf6!2sYashada%20multi-state%20co-op!5e0!3m2!1sen!2sin!4v1773251013053!5m2!1sen!2sin"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-2xl"
            />
          </div>
        </section>
      </FadeInSection>

      <FadeInSection>
        <section>
          <SectionTitle title="आमच्या कार्यरत शाखा" />
          <div className="mt-6">
            <BranchGrid highlightMain />
          </div>
        </section>
      </FadeInSection>
    </div>
  );
};

export default Contact;
