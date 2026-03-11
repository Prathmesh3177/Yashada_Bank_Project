import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import bankLogo from '../assets/bank_logo.png';
import { useLanguage } from '../context/LanguageContext';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { language, setLanguage } = useLanguage();
  const isMarathi = language === 'mr';

  const navLinks = [
    { path: '/', labelMr: 'मुख्यपृष्ठ', labelEn: 'Home' },
    { path: '/about', labelMr: 'संस्थेविषयी', labelEn: 'About' },
    { path: '/deposits', labelMr: 'ठेवी', labelEn: 'Deposits' },
    { path: '/loans', labelMr: 'कर्ज', labelEn: 'Loans' },
    { path: '/services', labelMr: 'सेवा', labelEn: 'Services' },
    { path: '/gallery', labelMr: 'गॅलरी', labelEn: 'Gallery' },
    { path: '/contact', labelMr: 'संपर्क', labelEn: 'Contact' }
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-blue-100 bg-white/95 backdrop-blur-sm">
      <div className="bank-container flex h-24 items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <img src={bankLogo} alt="Yashada Bank Logo" className="h-14 w-14 rounded-full object-cover" />
          <div>
            <p className="text-lg font-extrabold text-brand-primary">
              {isMarathi ? 'यशदा मल्टिस्टेट को.ऑप.क्रेडिट' : 'Yashada Multistate Co-op Credit'}
            </p>
            <p className="text-xs text-slate-500">{isMarathi ? 'धाराशिव, महाराष्ट्र' : 'Dharashiv, Maharashtra'}</p>
          </div>
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <div className="flex items-center gap-2 rounded-full border border-blue-200 bg-white px-2 py-1 text-xs font-semibold text-slate-700">
            <span className={isMarathi ? 'text-brand-primary' : 'text-slate-500'}>मराठी</span>
            <button
              type="button"
              aria-label="Toggle language"
              onClick={() => setLanguage(isMarathi ? 'en' : 'mr')}
              className={`relative h-6 w-11 rounded-full transition ${isMarathi ? 'bg-brand-primary' : 'bg-slate-300'}`}
            >
              <span
                className={`absolute top-0.5 h-5 w-5 rounded-full bg-white transition ${
                  isMarathi ? 'left-0.5' : 'left-5.5'
                }`}
              />
            </button>
            <span className={!isMarathi ? 'text-brand-primary' : 'text-slate-500'}>English</span>
          </div>

          <button
            className="rounded-lg border border-blue-200 px-3 py-2 text-sm font-semibold text-brand-primary md:hidden"
            onClick={() => setIsOpen((prev) => !prev)}
            type="button"
          >
            {isMarathi ? 'मेन्यू' : 'Menu'}
          </button>
        </div>

        <button
          className="rounded-lg border border-blue-200 px-3 py-2 text-sm font-semibold text-brand-primary md:hidden"
          onClick={() => setIsOpen((prev) => !prev)}
          type="button"
        >
          {isMarathi ? 'मेन्यू' : 'Menu'}
        </button>

        <nav className="hidden items-center gap-2 md:flex">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `rounded-full px-4 py-2 text-sm font-medium transition ${
                  isActive
                    ? 'bg-brand-primary text-white'
                    : 'text-slate-700 hover:bg-blue-50 hover:text-brand-primary'
                }`
              }
            >
              {isMarathi ? link.labelMr : link.labelEn}
            </NavLink>
          ))}
        </nav>
      </div>

      {isOpen && (
        <div className="bank-container space-y-3 pb-4 md:hidden">
          <div className="flex items-center gap-2 rounded-full border border-blue-200 bg-white px-2 py-1 text-xs font-semibold text-slate-700">
            <span className={isMarathi ? 'text-brand-primary' : 'text-slate-500'}>मराठी</span>
            <button
              type="button"
              aria-label="Toggle language"
              onClick={() => setLanguage(isMarathi ? 'en' : 'mr')}
              className={`relative h-6 w-11 rounded-full transition ${isMarathi ? 'bg-brand-primary' : 'bg-slate-300'}`}
            >
              <span
                className={`absolute top-0.5 h-5 w-5 rounded-full bg-white transition ${
                  isMarathi ? 'left-0.5' : 'left-5.5'
                }`}
              />
            </button>
            <span className={!isMarathi ? 'text-brand-primary' : 'text-slate-500'}>English</span>
          </div>

          <nav className="grid gap-2">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `rounded-lg px-4 py-2 text-sm font-medium ${
                    isActive
                      ? 'bg-brand-primary text-white'
                      : 'bg-blue-50 text-slate-700 hover:text-brand-primary'
                  }`
                }
                onClick={() => setIsOpen(false)}
              >
                {isMarathi ? link.labelMr : link.labelEn}
              </NavLink>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
