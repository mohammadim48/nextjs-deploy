// LanguageContext.js
import { createContext, useState, useContext, useEffect } from 'react';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('fa');
  const [texts, setTexts] = useState({}); // متون مربوط به زبان

  // اجرای این افکت تنها یک بار در ابتدای بارگذاری کامپوننت
  useEffect(() => {
    // خواندن زبان از localStorage
    const storedLanguage = localStorage.getItem('preferredLanguage');
    if (storedLanguage) {
      setLanguage(storedLanguage);

      // تنظیم متون براساس زبان ذخیره شده
      if (storedLanguage === 'fa') {
        setTexts(localFn);
      } else if (storedLanguage === 'en') {
        setTexts(localEn);
      }
    }
  }, []);

  const handleLanguageChange = (newLanguage) => {
    if (newLanguage === 'fa') {
      setTexts(localFn);
    } else if (newLanguage === 'en') {
      setTexts(localEn);
    }
    setLanguage(newLanguage);

    // ذخیره زبان در localStorage
    localStorage.setItem('preferredLanguage', newLanguage);
  };

  return (
    <LanguageContext.Provider value={{ language, texts, handleLanguageChange }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  return useContext(LanguageContext);
};