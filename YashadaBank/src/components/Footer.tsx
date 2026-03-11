const Footer = () => {
  return (
    <footer className="mt-16 bg-brand-primary text-white">
      <div className="bank-container grid gap-8 py-10 md:grid-cols-3">
        <div>
          <h3 className="text-lg font-bold">यशदा सहकारी बँक</h3>
          <p className="mt-2 text-sm text-blue-100">
            ग्राहकांचा विश्वास आणि गावाच्या विकासासाठी समर्पित सहकारी बँक.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wide text-blue-200">मुख्य सेवा</h4>
          <ul className="mt-3 space-y-2 text-sm text-blue-50">
            <li>बचत खाते</li>
            <li>मुदत ठेवी</li>
            <li>कृषी कर्ज</li>
            <li>डिजिटल बँकिंग</li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wide text-blue-200">संपर्क</h4>
          <p className="mt-3 text-sm text-blue-50">मुख्य शाखा, उस्मानाबाद, महाराष्ट्र</p>
          <p className="mt-1 text-sm text-blue-50">फोन: +91 12345 67890</p>
          <p className="mt-1 text-sm text-blue-50">ईमेल: info@yashadabank.in</p>
        </div>
      </div>
      <div className="border-t border-blue-700 py-4 text-center text-xs text-blue-100">
        © 2026 यशदा सहकारी बँक. सर्व हक्क राखीव.
      </div>
    </footer>
  );
};

export default Footer;
