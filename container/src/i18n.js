import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
    resources: {
        en: {
            translation: {
                "title": "Curius Characters!",
                "mainTitle": "Discover Characters in Your Favorite Series",
                "mainText": "Dive into the magical world of Harry Potter or explore the interdimensional adventures of Rick and Morty!"
            }
        },
        es: {
            translation: {
                "title": "Personajes Curiosos!",
                "mainTitle": "Descubre Personajes en tu Serie Favorita",
                "mainText": "¡Sumérgete en el mundo mágico de Harry Potter o explora las aventuras interdimensionales de Rick y Morty!"
            }
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

export default i18n;