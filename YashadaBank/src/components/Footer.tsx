import { NavLink } from 'react-router-dom';
import { Mail, MapPin, Phone } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import bankLogo from '../assets/bank_logo.png';

const Footer = () => {
  const { t } = useTranslation();

  const quickLinks = [
    { to: '/', label: t('nav.home') },
    { to: '/about-us', label: t('nav.about') },
    { to: '/member-services', label: t('nav.services') },
    { to: '/contact-us', label: t('nav.contact') }
  ];

  const serviceLinks = [
    { to: '/deposit-schemes', label: t('nav.deposits') },
    { to: '/loan-services', label: t('nav.loans') },
    { to: '/member-services', label: 'Member Support' }
  ];

  return (
    <footer className="mt-16 bg-brand-dark text-white">
      <div className="bank-container grid gap-8 py-12 sm:grid-cols-2 xl:grid-cols-4">
        <div>
          <img src={bankLogo} alt="Yashada Logo" className="h-14 w-28 rounded-md bg-white p-1 object-contain" loading="lazy" />
          <h2 className="mt-3 text-xl font-bold">{t('site.name')}</h2>
          <p className="mt-3 text-base text-red-100">{t('site.tagline')}</p>
        </div>

        <div>
          <h3 className="text-base font-semibold uppercase tracking-wide text-red-200">Quick Links</h3>
          <ul className="mt-3 space-y-2 text-base text-red-100">
            {quickLinks.map((link) => (
              <li key={link.to}>
                <NavLink to={link.to} className="transition hover:text-white">
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-base font-semibold uppercase tracking-wide text-red-200">Services</h3>
          <ul className="mt-3 space-y-2 text-base text-red-100">
            {serviceLinks.map((link) => (
              <li key={link.to}>
                <NavLink to={link.to} className="transition hover:text-white">
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-base font-semibold uppercase tracking-wide text-red-200">{t('nav.contact')}</h3>
          <div className="mt-3 space-y-3 text-base text-red-100">
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              <p>+91 9881059007</p>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              <p>yashadamultistate@yahoo.in</p>
            </div>
            <div className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
              <p className="whitespace-pre-line">{t('footer.addressLine')}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-red-700 py-4 text-center text-xs text-red-100">
        © 2026 Yashada Multistate Cooperative Credit Society. All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;
