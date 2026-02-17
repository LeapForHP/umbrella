import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import messages from './local/index';

// Determine language from URL path
const getLanguageFromPath = () => {
  const path = window.location.pathname;
  if (path.startsWith('/zh')) {
    return 'zh';
  }
  if (path.startsWith('/ja')) {
    return 'ja';
  }
  return 'en'; // Default to English
};

i18n
  .use(initReactI18next)
  .init({
    lng: getLanguageFromPath(),
    fallbackLng: 'en',
    debug: false,
    resources: messages,
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;