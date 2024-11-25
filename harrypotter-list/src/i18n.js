import i18n from 'i18next';
import esTranslation from './locales/es/translation.json';
import enTranslation from './locales/en/translation.json';
import { initReactI18next } from 'react-i18next';

if (!i18n.isInitialized) {
    i18n.use(initReactI18next).init({
        resources: {
            en: {
                translation: enTranslation
            },
            es: {
                translation: esTranslation
            }
        },
        keySeparator: false,
        lng: 'en',
        fallbackLng: 'en',
        react: {
            useSuspense: true
        },
        interpolation: {
            escapeValue: false
        }
    });
}else{
    i18n.addResourceBundle('es', 'translation', esTranslation, true, true);
    i18n.addResourceBundle('en', 'translation', enTranslation, true, true);
}

export default i18n;