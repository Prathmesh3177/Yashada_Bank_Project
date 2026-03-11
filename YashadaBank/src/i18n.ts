import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './locales/en.json';
import mr from './locales/mr.json';

const STORAGE_KEY = 'yashada-bank-language';
const savedLanguage = localStorage.getItem(STORAGE_KEY);
const browserLanguage = navigator.language.toLowerCase().startsWith('mr') ? 'mr' : 'en';

void i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    mr: { translation: mr }
  },
  lng: savedLanguage === 'mr' || savedLanguage === 'en' ? savedLanguage : browserLanguage,
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false
  }
});

i18n.on('languageChanged', (lng) => {
  localStorage.setItem(STORAGE_KEY, lng);
  document.documentElement.lang = lng;
});

document.documentElement.lang = i18n.language;

export default i18n;
