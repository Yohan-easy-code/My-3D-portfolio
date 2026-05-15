import React, { useEffect, useMemo, useState } from "react";

import {
  DEFAULT_LANGUAGE,
  LanguageContext,
  STORAGE_KEY,
  SUPPORTED_LANGUAGES,
  getLanguageFromPathname,
  getLocalizedValue,
} from "./languageCore";

const getInitialLanguage = () => {
  if (typeof window === "undefined") {
    return DEFAULT_LANGUAGE;
  }

  const urlLanguage = getLanguageFromPathname(window.location.pathname);
  const storedLanguage = window.localStorage.getItem(STORAGE_KEY);

  if (SUPPORTED_LANGUAGES.includes(urlLanguage)) {
    return urlLanguage;
  }

  return SUPPORTED_LANGUAGES.includes(storedLanguage)
    ? storedLanguage
    : DEFAULT_LANGUAGE;
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(getInitialLanguage);

  useEffect(() => {
    document.documentElement.lang = language;
    window.localStorage.setItem(STORAGE_KEY, language);
  }, [language]);

  const value = useMemo(
    () => ({
      language,
      setLanguage,
      t: (content) => getLocalizedValue(content, language),
    }),
    [language],
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};
