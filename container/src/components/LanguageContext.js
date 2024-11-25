// container/src/LanguageContext.js
import React, { createContext, useState, useContext } from 'react';
import i18n from '../i18n'; // i18n configuration

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(i18n.language);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng); // Change language using i18next
    setLanguage(lng); // Update language state
    // Dispatch custom event to notify microfrontends
    const event = new CustomEvent('languageChanged', { detail: lng });
    window.dispatchEvent(event);
  };

  return (
    <LanguageContext.Provider value={{ language, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);