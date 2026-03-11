import ServiceCard from '../components/ServiceCard';

const serviceList = [
  {
    title: 'इंटरनेट बँकिंग',
    description: 'कुठूनही खाते व्यवस्थापन, फंड ट्रान्सफर आणि बिल पेमेंटची सुविधा.',
    icon: '🌐'
  },
  {
    title: 'ATM सेवा',
    description: '24x7 रोख रक्कम काढणे व बॅलन्स तपासणी.',
    icon: '🏧'
  },
  {
    title: 'SMS अलर्ट',
    description: 'प्रत्येक व्यवहारासाठी त्वरित संदेश सेवा.',
    icon: '📩'
  },
  {
    title: 'मायक्रो इन्शुरन्स',
    description: 'किफायतशीर विमा योजनांद्वारे आर्थिक संरक्षण.',
    icon: '🛡️'
  },
  {
    title: 'पेन्शन वितरण',
    description: 'ज्येष्ठ नागरिकांसाठी सुरक्षित आणि नियोजित पेन्शन सेवा.',
    icon: '👴'
  },
  {
    title: 'UPI पेमेंट',
    description: 'झटपट पेमेंट, क्यूआर कोड स्कॅन आणि व्यापारी व्यवहार.',
    icon: '⚡'
  }
];

const Services = () => {
  return (
    <section className="bank-container py-12">
      <h1 className="section-title">बँक सेवा</h1>
      <p className="section-subtitle">डिजिटल आणि पारंपरिक सेवांचा संतुलित अनुभव.</p>

      <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {serviceList.map((service) => (
          <ServiceCard key={service.title} {...service} />
        ))}
      </div>
    </section>
  );
};

export default Services;
