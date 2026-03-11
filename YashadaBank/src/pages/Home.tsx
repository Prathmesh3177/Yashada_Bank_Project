import {
  BanknotesIcon,
  BuildingLibraryIcon,
  CreditCardIcon,
  DevicePhoneMobileIcon,
  HomeModernIcon,
  MapPinIcon,
  TruckIcon,
  UserGroupIcon
} from '@heroicons/react/24/outline';
import homeDepositScheme from '../assets/home-deposit-scheme.png';
import homeHeroBanner from '../assets/home-hero-banner.png';
import bankLogo from '../assets/bank_logo.png';
import { useLanguage } from '../context/LanguageContext';

const Home = () => {
  const { language } = useLanguage();
  const isMarathi = language === 'mr';

  const services = [
    {
      titleMr: 'बचत खाते',
      titleEn: 'Savings Account',
      icon: BuildingLibraryIcon
    },
    {
      titleMr: 'ठेवी',
      titleEn: 'Deposits',
      icon: BanknotesIcon
    },
    {
      titleMr: 'कर्ज',
      titleEn: 'Loans',
      icon: CreditCardIcon
    },
    {
      titleMr: 'एटीएम सेवा',
      titleEn: 'ATM Services',
      icon: CreditCardIcon
    },
    {
      titleMr: 'मोबाईल बँकिंग',
      titleEn: 'Mobile Banking',
      icon: DevicePhoneMobileIcon
    }
  ];

  const deposits = [
    { mr: 'आवर्ती ठेव', en: 'Recurring Deposit' },
    { mr: 'मुदत ठेव', en: 'Fixed Deposit' },
    { mr: 'मासिक ठेव', en: 'Monthly Deposit' }
  ];

  const loans = [
    { titleMr: 'गोल्ड लोन', titleEn: 'Gold Loan', icon: BanknotesIcon },
    { titleMr: 'वैयक्तिक कर्ज', titleEn: 'Personal Loan', icon: UserGroupIcon },
    { titleMr: 'वाहन कर्ज', titleEn: 'Vehicle Loan', icon: TruckIcon },
    { titleMr: 'व्यवसाय कर्ज', titleEn: 'Business Loan', icon: HomeModernIcon }
  ];

  const branches = [
    { nameMr: 'धाराशिव मुख्य शाखा', nameEn: 'Dharashiv Main Branch', addressMr: 'धाराशिव शहर', addressEn: 'Dharashiv City' },
    { nameMr: 'तुळजापूर शाखा', nameEn: 'Tuljapur Branch', addressMr: 'बस स्टँड जवळ, तुळजापूर', addressEn: 'Near Bus Stand, Tuljapur' },
    { nameMr: 'कळंब शाखा', nameEn: 'Kalamb Branch', addressMr: 'मुख्य बाजारपेठ, कळंब', addressEn: 'Main Market, Kalamb' },
    { nameMr: 'भूम शाखा', nameEn: 'Bhoom Branch', addressMr: 'नगर रोड, भूम', addressEn: 'Nagar Road, Bhoom' }
  ];

  return (
    <div className="bg-slate-50 text-slate-800">
      <section className="bank-container py-12 md:py-16">
        <div className="grid items-center gap-8 rounded-3xl bg-gradient-to-r from-brand-primary to-brand-secondary p-8 text-white shadow-card lg:grid-cols-2">
          <div>
            <p className="text-sm text-blue-100">{isMarathi ? 'विश्वसनीय सहकारी बँकिंग' : 'Trusted Cooperative Banking'}</p>
            <h2 className="mt-3 text-3xl font-extrabold leading-tight md:text-5xl">
              {isMarathi ? 'विश्वासाचे नाते, समृद्ध भविष्य' : 'Trusted Relations, Prosperous Future'}
            </h2>
            <div className="mt-6 flex flex-wrap gap-3">
              <button className="rounded-full bg-brand-accent px-5 py-2.5 text-sm font-semibold text-slate-900">
                {isMarathi ? 'खाते उघडा' : 'Open Account'}
              </button>
              <button className="rounded-full border border-white/40 px-5 py-2.5 text-sm font-semibold text-white">
                {isMarathi ? 'कर्जासाठी अर्ज करा' : 'Apply for Loan'}
              </button>
            </div>
          </div>

          <div className="rounded-2xl border border-white/20 bg-white/10 p-5">
            <img src={homeHeroBanner} alt="Hero Banner" className="h-56 w-full rounded-xl object-cover" />
          </div>
        </div>
      </section>

      <section className="bank-container py-12">
        <h3 className="section-title">{isMarathi ? 'बँकिंग सेवा' : 'Banking Services'}</h3>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 xl:grid-cols-5">
          {services.map((service) => (
            <div key={service.titleMr} className="bank-card flex flex-col items-start gap-3 p-5">
              <service.icon className="h-8 w-8 text-brand-primary" />
              <p className="text-sm font-semibold text-slate-700">{isMarathi ? service.titleMr : service.titleEn}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bank-container py-12">
        <h3 className="section-title">{isMarathi ? 'ठेवी योजना' : 'Deposit Schemes'}</h3>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {deposits.map((item) => (
            <div key={item.mr} className="bank-card">
              <h4 className="text-lg font-semibold text-brand-primary">{isMarathi ? item.mr : item.en}</h4>
              <div className="mt-4 rounded-xl bg-blue-50 p-4">
                <img src={homeDepositScheme} alt={isMarathi ? item.mr : item.en} className="h-32 w-full rounded-lg object-cover" />
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bank-container py-12">
        <h3 className="section-title">{isMarathi ? 'कर्ज योजना' : 'Loan Schemes'}</h3>
        <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {loans.map((loan) => (
            <div key={loan.titleMr} className="bank-card">
              <loan.icon className="h-8 w-8 text-brand-primary" />
              <h4 className="mt-3 text-lg font-semibold text-slate-800">{isMarathi ? loan.titleMr : loan.titleEn}</h4>
            </div>
          ))}
        </div>
      </section>

      <section className="bank-container py-12">
        <div className="grid items-center gap-8 rounded-3xl bg-white p-8 shadow-card lg:grid-cols-2">
          <div>
            <h3 className="section-title">{isMarathi ? 'संस्थेविषयी' : 'About Institution'}</h3>
            <h4 className="mt-3 text-xl font-bold text-brand-primary">
              {isMarathi ? 'यशदा मल्टिस्टेट को.ऑप.क्रेडिट' : 'Yashada Multistate Co-op Credit'}
            </h4>
            <p className="mt-4 text-sm leading-7 text-slate-600 md:text-base">
              {isMarathi
                ? 'यशदा मल्टीस्टेट ही अशी बँक आहे जी फक्त स्वप्नच दाखवत नाही तर ती पूर्ण करण्याचे सामर्थ्य देते. शेतकरी, नवउद्योजक, महिला आणि समाजातील सर्व घटकांना प्रेरणा व आर्थिक पाठबळ देण्यासाठी यशदा सतत कार्यरत आहे.'
                : 'Yashada Multistate is a bank that not only inspires dreams but also empowers people to realize them. We actively support farmers, new entrepreneurs, women, and all sections of society with financial strength and guidance.'}
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              <div className="rounded-xl bg-blue-50 p-4 text-center">
                <p className="text-2xl font-extrabold text-brand-primary">10000+</p>
                <p className="text-xs text-slate-500">{isMarathi ? 'समाधानी खातेदार' : 'Satisfied Account Holders'}</p>
              </div>
              <div className="rounded-xl bg-blue-50 p-4 text-center">
                <p className="text-2xl font-extrabold text-brand-primary">45</p>
                <p className="text-xs text-slate-500">{isMarathi ? 'प्रशिक्षित कर्मचारी' : 'Trained Employees'}</p>
              </div>
              <div className="rounded-xl bg-blue-50 p-4 text-center">
                <p className="text-2xl font-extrabold text-brand-primary">365</p>
                <p className="text-xs text-slate-500">{isMarathi ? 'दिवस अखंड सेवा' : 'Days of Continuous Service'}</p>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center rounded-2xl bg-blue-50 p-5">
            <img src={bankLogo} alt="Yashada Bank" className="h-64 w-64 rounded-full object-contain" />
          </div>
        </div>
      </section>

      <section className="bank-container py-12">
        <div className="grid items-center gap-8 rounded-3xl bg-gradient-to-r from-blue-50 to-amber-50 p-8 shadow-card lg:grid-cols-3">
          <div className="flex items-center justify-center rounded-2xl bg-white p-4 lg:col-span-1">
            <img src={bankLogo} alt="Founder" className="h-56 w-56 rounded-full object-contain" />
          </div>
          <div className="lg:col-span-2">
            <h3 className="section-title">{isMarathi ? 'संस्थापक' : 'Founder'}</h3>
            <p className="mt-2 text-lg font-semibold text-brand-primary">
              {isMarathi ? 'प्रा. सुधीर दत्तात्रय सस्ते' : 'Prof. Sudhir Dattatray Saste'}
            </p>
            <p className="text-sm text-slate-500">{isMarathi ? 'संस्थापक / चेअरमन' : 'Founder / Chairman'}</p>
            <p className="mt-4 text-sm leading-7 text-slate-700 md:text-base">
              {isMarathi
                ? 'गेली 12 वर्षे यशदा मल्टिस्टेट ग्राहकांच्या सेवेत तत्पर आहे. सातही शाखा ग्राहककेंद्री सेवा देत असून 99% कर्जवसुली धोरणामुळे बँकेने मजबूत प्रगती केली आहे.'
                : 'For the last 12 years, Yashada Multistate has remained committed to customer service. All seven branches are customer-focused, and the bank has achieved strong growth through its 99% loan recovery policy.'}
            </p>
          </div>
        </div>
      </section>

      <section className="bank-container py-12">
        <h3 className="section-title">{isMarathi ? 'शाखा लोकेटर' : 'Branch Locator'}</h3>
        <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {branches.map((branch) => (
            <div key={branch.nameMr} className="bank-card">
              <MapPinIcon className="h-7 w-7 text-brand-primary" />
              <h4 className="mt-3 text-base font-semibold text-slate-800">{isMarathi ? branch.nameMr : branch.nameEn}</h4>
              <p className="mt-2 text-sm text-slate-600">{isMarathi ? branch.addressMr : branch.addressEn}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
