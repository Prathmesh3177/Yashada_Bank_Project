import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import bankLogo from '../assets/bank_logo.png';

const Header = () => {
  const [open, setOpen] = useState(false);
  const { t, i18n } = useTranslation();

  const links = [
    { to: '/', key: 'nav.home' },
    { to: '/about-us', key: 'nav.about' },
    { to: '/deposit-schemes', key: 'nav.deposits' },
    { to: '/loan-services', key: 'nav.loans' },
    { to: '/member-services', key: 'nav.faq' },
    { to: '/downloads', key: 'nav.downloads' },
    { to: '/news-notices', key: 'nav.news' },
    { to: '/gallery', key: 'nav.gallery' },
    { to: '/contact-us', key: 'nav.contact' }
  ];

  const changeLanguage = (lng: 'en' | 'mr') => {
    void i18n.changeLanguage(lng);
    setOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-red-100 bg-white/95 backdrop-blur-sm">
      <div className="bank-container flex items-center justify-between gap-4 py-3">
        <NavLink to="/" className="flex items-center gap-3">
          <img src={bankLogo} alt="Yashada logo" className="h-12 w-12 rounded-full object-contain" loading="lazy" />
          <div>
            <p className="text-sm font-extrabold text-brand-primary md:text-base">{t('site.name')}</p>
            <p className="text-xs text-brand-secondaryText">{t('site.tagline')}</p>
          </div>
        </NavLink>

        <div className="hidden items-center gap-2 lg:flex">
          <button
            type="button"
            onClick={() => changeLanguage('en')}
            className={`rounded-md px-3 py-1.5 text-xs font-semibold ${
              i18n.language === 'en' ? 'bg-brand-primary text-white' : 'bg-brand-light text-brand-darkText'
            }`}
          >
            EN
          </button>
          <button
            type="button"
            onClick={() => changeLanguage('mr')}
            className={`rounded-md px-3 py-1.5 text-xs font-semibold ${
              i18n.language === 'mr' ? 'bg-brand-primary text-white' : 'bg-brand-light text-brand-darkText'
            }`}
          >
            मराठी
          </button>
        </div>

        <button
          onClick={() => setOpen((value) => !value)}
          className="rounded-lg border border-red-200 p-2 text-brand-primary lg:hidden"
          type="button"
          aria-label={t('header.menuAria')}
        >
          {open ? <XMarkIcon className="h-5 w-5" /> : <Bars3Icon className="h-5 w-5" />}
        </button>
      </div>

      <nav className="hidden border-t border-red-100 bg-white lg:block">
        <div className="bank-container flex flex-wrap items-center justify-center gap-2 py-2">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `rounded-md px-3 py-2 text-sm font-medium transition ${
                  isActive ? 'bg-brand-primary text-white' : 'text-brand-darkText hover:bg-brand-light'
                }`
              }
            >
              {t(link.key)}
            </NavLink>
          ))}
        </div>
      </nav>

      {open ? (
        <div className="bank-container space-y-3 border-t border-red-100 pb-4 lg:hidden">
          <div className="flex gap-2 pt-3">
            <button
              type="button"
              onClick={() => changeLanguage('en')}
              className={`rounded-md px-3 py-1.5 text-xs font-semibold ${
                i18n.language === 'en' ? 'bg-brand-primary text-white' : 'bg-brand-light text-brand-darkText'
              }`}
            >
              EN
            </button>
            <button
              type="button"
              onClick={() => changeLanguage('mr')}
              className={`rounded-md px-3 py-1.5 text-xs font-semibold ${
                i18n.language === 'mr' ? 'bg-brand-primary text-white' : 'bg-brand-light text-brand-darkText'
              }`}
            >
              मराठी
            </button>
          </div>

          <div className="grid gap-2">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `rounded-md px-3 py-2 text-sm font-medium ${
                    isActive ? 'bg-brand-primary text-white' : 'bg-brand-light text-brand-darkText'
                  }`
                }
              >
                {t(link.key)}
              </NavLink>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  );
};

export default Header;
