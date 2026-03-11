import { useState } from 'react';
import { NavLink } from 'react-router-dom';

const navLinks = [
  { path: '/', label: 'मुख्यपृष्ठ' },
  { path: '/about', label: 'आमच्याविषयी' },
  { path: '/deposits', label: 'ठेवी' },
  { path: '/loans', label: 'कर्ज' },
  { path: '/services', label: 'सेवा' },
  { path: '/gallery', label: 'गॅलरी' },
  { path: '/contact', label: 'संपर्क' }
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-blue-100 bg-white/95 backdrop-blur-sm">
      <div className="bank-container flex h-20 items-center justify-between">
        <div>
          <p className="text-lg font-extrabold text-brand-primary">यशदा सहकारी बँक</p>
          <p className="text-xs text-slate-500">उस्मानाबाद, महाराष्ट्र</p>
        </div>

        <button
          className="rounded-lg border border-blue-200 px-3 py-2 text-sm font-semibold text-brand-primary md:hidden"
          onClick={() => setIsOpen((prev) => !prev)}
          type="button"
        >
          मेन्यू
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
              {link.label}
            </NavLink>
          ))}
        </nav>
      </div>

      {isOpen && (
        <div className="bank-container pb-4 md:hidden">
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
                {link.label}
              </NavLink>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
