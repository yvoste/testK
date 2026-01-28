import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

// Import des traductions
import frTranslation from "./locales/fr/translation.json";
import enTranslation from "./locales/en/translation.json";

i18n.use(LanguageDetector) // Détecte la langue du navigateur
    .use(initReactI18next) // Passe i18n à react-i18next
    .init({
        resources: {
            fr: {
                translation: frTranslation,
            },
            en: {
                translation: enTranslation,
            },
        },
        fallbackLng: "fr", // Langue par défaut
        debug: true, // Activé pour le développement
        interpolation: {
            escapeValue: false, // React s'occupe déjà de l'échappement
        },
    });

export default i18n;
