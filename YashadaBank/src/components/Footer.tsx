import { useLanguage } from '../context/LanguageContext';

const Footer = () => {
  const { language } = useLanguage();
  const isMarathi = language === 'mr';

  return (
    <footer className="mt-16 bg-brand-primary text-white">
      <div className="bank-container grid gap-8 py-10 md:grid-cols-3">
        <div>
          <h3 className="text-lg font-bold">
            {isMarathi ? 'यशदा मल्टिस्टेट को.ऑप.क्रेडिट' : 'Yashada Multistate Co-op Credit'}
          </h3>
          <p className="mt-2 text-sm text-blue-100">
            {isMarathi
              ? 'ग्राहकांचा विश्वास आणि सर्वसामान्यांच्या आर्थिक विकासासाठी समर्पित संस्था.'
              : 'Dedicated to trust-led banking and inclusive financial growth.'}
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wide text-blue-200">
            {isMarathi ? 'मुख्य सेवा' : 'Core Services'}
          </h4>
          <ul className="mt-3 space-y-2 text-sm text-blue-50">
            <li>{isMarathi ? 'बचत खाते' : 'Savings Account'}</li>
            <li>{isMarathi ? 'मुदत ठेवी' : 'Fixed Deposits'}</li>
            <li>{isMarathi ? 'कर्ज सेवा' : 'Loan Services'}</li>
            <li>{isMarathi ? 'डिजिटल बँकिंग' : 'Digital Banking'}</li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wide text-blue-200">
            {isMarathi ? 'मुख्य कार्यालय पत्ता' : 'Head Office Address'}
          </h4>
          <p className="mt-3 text-sm text-blue-50">
            {isMarathi
              ? 'यशदा हाईटस्, काकडे बिल्डींग, नाईकवाडी नगर, श्री विसर्जन विहीरी शेजारी धाराशिव -413501'
              : 'Yashada Heights, Kakade Building, Naikwadi Nagar, near Shri Visarjan Vihiri, Dharashiv - 413501'}
          </p>
          <p className="mt-1 text-sm text-blue-50">{isMarathi ? 'फोन' : 'Phone'}: +91 12345 67890</p>
          <p className="mt-1 text-sm text-blue-50">{isMarathi ? 'ईमेल' : 'Email'}: info@yashadabank.in</p>
        </div>
      </div>
      <div className="border-t border-blue-700 py-4 text-center text-xs text-blue-100">
        © 2026 {isMarathi ? 'यशदा मल्टिस्टेट को.ऑप.क्रेडिट. सर्व हक्क राखीव.' : 'Yashada Multistate Co-op Credit. All rights reserved.'}
      </div>
    </footer>
  );
};

export default Footer;
