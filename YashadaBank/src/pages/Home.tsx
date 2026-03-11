import {
  BanknotesIcon,
  BuildingLibraryIcon,
  CreditCardIcon,
  DevicePhoneMobileIcon,
  HomeModernIcon,
  MapPinIcon,
  UserGroupIcon,
  TruckIcon
} from '@heroicons/react/24/outline';

const navItems = ['मुख्यपृष्ठ', 'आमच्याबद्दल', 'ठेवी योजना', 'कर्ज योजना', 'सुविधा', 'गॅलरी', 'संपर्क'];

const services = [
  { title: 'Savings Account', icon: BuildingLibraryIcon },
  { title: 'Deposits', icon: BanknotesIcon },
  { title: 'Loans', icon: CreditCardIcon },
  { title: 'ATM Services', icon: CreditCardIcon },
  { title: 'Mobile Banking', icon: DevicePhoneMobileIcon }
];

const deposits = ['Recurring Deposit', 'Fixed Deposit', 'Monthly Deposit'];

const loans = [
  { title: 'Gold Loan', icon: BanknotesIcon },
  { title: 'Personal Loan', icon: UserGroupIcon },
  { title: 'Vehicle Loan', icon: TruckIcon },
  { title: 'Business Loan', icon: HomeModernIcon }
];

const branches = [
  { name: 'उस्मानाबाद मुख्य शाखा', address: 'सोलापूर रोड, उस्मानाबाद' },
  { name: 'तुळजापूर शाखा', address: 'बस स्टँड जवळ, तुळजापूर' },
  { name: 'कळंब शाखा', address: 'मुख्य बाजारपेठ, कळंब' },
  { name: 'भूम शाखा', address: 'नगर रोड, भूम' }
];

const Home = () => {
  return (
    <div className="bg-slate-50 text-slate-800">
      <header className="sticky top-0 z-50 border-b border-blue-100 bg-white/95 backdrop-blur-sm">
        <div className="bank-container flex flex-wrap items-center justify-between gap-4 py-4">
          <div>
            <h1 className="text-xl font-extrabold text-brand-primary">यशदा सहकारी बँक</h1>
            <p className="text-xs text-slate-500">उस्मानाबाद, महाराष्ट्र</p>
          </div>

          <nav className="hidden items-center gap-2 lg:flex">
            {navItems.map((item) => (
              <a
                key={item}
                href="#"
                className="rounded-full px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-blue-50 hover:text-brand-primary"
              >
                {item}
              </a>
            ))}
          </nav>

          <button className="rounded-full bg-brand-primary px-4 py-2 text-sm font-semibold text-white hover:bg-blue-800">
            Internet Banking
          </button>
        </div>
      </header>

      <section className="bank-container py-12 md:py-16">
        <div className="grid items-center gap-8 rounded-3xl bg-gradient-to-r from-brand-primary to-brand-secondary p-8 text-white shadow-card lg:grid-cols-2">
          <div>
            <p className="text-sm text-blue-100">विश्वसनीय सहकारी बँकिंग</p>
            <h2 className="mt-3 text-3xl font-extrabold leading-tight md:text-5xl">"विश्वासाचे नाते, समृद्ध भविष्य"</h2>
            <div className="mt-6 flex flex-wrap gap-3">
              <button className="rounded-full bg-brand-accent px-5 py-2.5 text-sm font-semibold text-slate-900">
                खाते उघडा
              </button>
              <button className="rounded-full border border-white/40 px-5 py-2.5 text-sm font-semibold text-white">
                कर्जासाठी अर्ज करा
              </button>
            </div>
          </div>

          <div className="rounded-2xl border border-white/20 bg-white/10 p-5">
            {/* Add hero banner image */}
            <div className="flex h-56 items-center justify-center rounded-xl border border-dashed border-white/40 text-sm text-blue-100">
              Hero Banner Placeholder
            </div>
          </div>
        </div>
      </section>

      <section className="bank-container py-12">
        <h3 className="section-title">Banking Services</h3>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 xl:grid-cols-5">
          {services.map((service) => (
            <div key={service.title} className="bank-card flex flex-col items-start gap-3 p-5">
              <service.icon className="h-8 w-8 text-brand-primary" />
              <p className="text-sm font-semibold text-slate-700">{service.title}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bank-container py-12">
        <h3 className="section-title">Deposit Schemes</h3>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {deposits.map((item) => (
            <div key={item} className="bank-card">
              <h4 className="text-lg font-semibold text-brand-primary">{item}</h4>
              <div className="mt-4 rounded-xl bg-blue-50 p-4">
                {/* Add bank image here */}
                <div className="flex h-32 items-center justify-center rounded-lg border border-dashed border-blue-300 text-xs text-slate-500">
                  Deposit Image Placeholder
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bank-container py-12">
        <h3 className="section-title">Loan Schemes</h3>
        <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {loans.map((loan) => (
            <div key={loan.title} className="bank-card">
              <loan.icon className="h-8 w-8 text-brand-primary" />
              <h4 className="mt-3 text-lg font-semibold text-slate-800">{loan.title}</h4>
            </div>
          ))}
        </div>
      </section>

      <section className="bank-container py-12">
        <div className="grid items-center gap-8 rounded-3xl bg-white p-8 shadow-card lg:grid-cols-2">
          <div className="rounded-2xl bg-blue-50 p-5">
            {/* Add mobile banking app image */}
            <div className="flex h-72 items-center justify-center rounded-xl border border-dashed border-blue-300 text-sm text-slate-500">
              Mobile App Mockup Placeholder
            </div>
          </div>
          <div>
            <h3 className="section-title">Mobile Banking</h3>
            <p className="mt-4 text-sm leading-7 text-slate-600 md:text-base">
              आमच्या मोबाइल बँकिंग अॅपमुळे 24x7 बॅलन्स तपासणी, फंड ट्रान्सफर, बिल पेमेंट आणि व्यवहार अलर्ट
              सहज उपलब्ध होतात. सुरक्षित लॉगिन, वेगवान व्यवहार आणि सोप्या इंटरफेससह तुमचे बँकिंग आता अधिक
              स्मार्ट.
            </p>
          </div>
        </div>
      </section>

      <section className="bank-container py-12">
        <div className="grid items-center gap-8 rounded-3xl bg-white p-8 shadow-card lg:grid-cols-2">
          <div>
            <h3 className="section-title">About Bank</h3>
            <p className="mt-4 text-sm leading-7 text-slate-600 md:text-base">
              यशदा सहकारी बँक ही स्थानिक नागरिक, शेतकरी आणि लघुउद्योजकांसाठी विश्वासार्ह वित्तीय भागीदार आहे.
              आधुनिक तंत्रज्ञानासह पारदर्शक आणि ग्राहककेंद्री बँकिंग सेवा देणे हे आमचे ध्येय आहे.
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              <div className="rounded-xl bg-blue-50 p-4 text-center">
                <p className="text-2xl font-extrabold text-brand-primary">10000+</p>
                <p className="text-xs text-slate-500">Customers</p>
              </div>
              <div className="rounded-xl bg-blue-50 p-4 text-center">
                <p className="text-2xl font-extrabold text-brand-primary">45</p>
                <p className="text-xs text-slate-500">Employees</p>
              </div>
              <div className="rounded-xl bg-blue-50 p-4 text-center">
                <p className="text-2xl font-extrabold text-brand-primary">365</p>
                <p className="text-xs text-slate-500">Days Service</p>
              </div>
            </div>
          </div>
          <div className="rounded-2xl bg-blue-50 p-5">
            {/* Add bank office image */}
            <div className="flex h-64 items-center justify-center rounded-xl border border-dashed border-blue-300 text-sm text-slate-500">
              Bank Office Image Placeholder
            </div>
          </div>
        </div>
      </section>

      <section className="bank-container py-12">
        <div className="grid items-center gap-8 rounded-3xl bg-gradient-to-r from-blue-50 to-amber-50 p-8 shadow-card lg:grid-cols-3">
          <div className="rounded-2xl bg-white p-4 lg:col-span-1">
            {/* Add founder image */}
            <div className="flex h-64 items-center justify-center rounded-xl border border-dashed border-blue-300 text-sm text-slate-500">
              Founder Image Placeholder
            </div>
          </div>
          <div className="lg:col-span-2">
            <h3 className="section-title">Leadership Message</h3>
            <p className="mt-4 text-sm leading-7 text-slate-700 md:text-base">
              "ग्राहकांचा विश्वास हीच आमची सर्वात मोठी ताकद आहे. आधुनिक तंत्रज्ञान, सहकार भाव आणि प्रामाणिक सेवा
              यांद्वारे आम्ही उस्मानाबादच्या विकासात सातत्याने योगदान देत राहू."
            </p>
            <p className="mt-4 text-sm font-semibold text-brand-primary">- संस्थापक अध्यक्ष</p>
          </div>
        </div>
      </section>

      <section className="bank-container py-12">
        <h3 className="section-title">Branch Locator</h3>
        <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {branches.map((branch) => (
            <div key={branch.name} className="bank-card">
              <MapPinIcon className="h-7 w-7 text-brand-primary" />
              <h4 className="mt-3 text-base font-semibold text-slate-800">{branch.name}</h4>
              <p className="mt-2 text-sm text-slate-600">{branch.address}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="mt-12 bg-brand-primary text-white">
        <div className="bank-container grid gap-8 py-10 md:grid-cols-3">
          <div>
            <h4 className="text-lg font-bold">यशदा सहकारी बँक</h4>
            <p className="mt-2 text-sm text-blue-100">सोलापूर रोड, उस्मानाबाद, महाराष्ट्र</p>
            <p className="mt-1 text-sm text-blue-100">फोन: +91 12345 67890</p>
            <p className="mt-1 text-sm text-blue-100">ईमेल: info@yashadabank.in</p>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wide text-blue-200">Quick Links</h4>
            <ul className="mt-3 space-y-2 text-sm text-blue-50">
              <li>मुख्यपृष्ठ</li>
              <li>ठेवी योजना</li>
              <li>कर्ज योजना</li>
              <li>संपर्क</li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wide text-blue-200">Social Media</h4>
            <ul className="mt-3 space-y-2 text-sm text-blue-50">
              <li>Facebook</li>
              <li>Instagram</li>
              <li>YouTube</li>
              <li>LinkedIn</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-blue-700 py-4 text-center text-xs text-blue-100">
          © 2026 यशदा सहकारी बँक. सर्व हक्क राखीव.
        </div>
      </footer>
    </div>
  );
};

export default Home;
