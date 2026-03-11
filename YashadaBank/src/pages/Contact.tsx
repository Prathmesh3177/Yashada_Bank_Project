const Contact = () => {
  return (
    <section className="bank-container py-12">
      <h1 className="section-title">संपर्क करा</h1>
      <p className="section-subtitle">आपल्या प्रश्नांसाठी आमची टीम नेहमी तत्पर आहे.</p>

      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        <div className="bank-card">
          <h2 className="text-lg font-semibold text-brand-primary">मुख्य कार्यालय</h2>
          <p className="mt-3 text-sm text-slate-600">यशदा सहकारी बँक, सोलापूर रोड, उस्मानाबाद, महाराष्ट्र</p>
          <p className="mt-2 text-sm text-slate-600">फोन: +91 12345 67890</p>
          <p className="mt-2 text-sm text-slate-600">ईमेल: info@yashadabank.in</p>
          <p className="mt-2 text-sm text-slate-600">वेळ: सोम - शनि, सकाळी 10 ते संध्याकाळी 6</p>
        </div>

        <form className="bank-card space-y-4">
          <h2 className="text-lg font-semibold text-brand-primary">संदेश पाठवा</h2>
          <input
            type="text"
            placeholder="आपले नाव"
            className="w-full rounded-xl border border-blue-200 px-4 py-3 text-sm outline-none ring-brand-secondary transition focus:ring-2"
          />
          <input
            type="email"
            placeholder="ईमेल पत्ता"
            className="w-full rounded-xl border border-blue-200 px-4 py-3 text-sm outline-none ring-brand-secondary transition focus:ring-2"
          />
          <textarea
            rows={5}
            placeholder="आपला संदेश"
            className="w-full rounded-xl border border-blue-200 px-4 py-3 text-sm outline-none ring-brand-secondary transition focus:ring-2"
          />
          <button
            type="button"
            className="rounded-full bg-brand-primary px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-800"
          >
            संदेश पाठवा
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
