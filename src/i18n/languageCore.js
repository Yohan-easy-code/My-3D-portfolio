import { createContext, useContext } from "react";

export const DEFAULT_LANGUAGE = "en";
export const SUPPORTED_LANGUAGES = ["en", "fr"];
export const STORAGE_KEY = "portfolio-language";
export const FRENCH_PATH_PREFIX = "/fr";

export const LanguageContext = createContext(null);

export const getLocalizedValue = (value, language) => {
  if (!value || typeof value !== "object" || Array.isArray(value)) {
    return value;
  }

  return value[language] ?? value[DEFAULT_LANGUAGE] ?? "";
};

export const getLanguageFromPathname = (pathname) =>
  pathname === FRENCH_PATH_PREFIX || pathname.startsWith(`${FRENCH_PATH_PREFIX}/`)
    ? "fr"
    : DEFAULT_LANGUAGE;

export const stripLanguagePathname = (pathname) => {
  if (pathname === FRENCH_PATH_PREFIX) {
    return "/";
  }

  if (pathname.startsWith(`${FRENCH_PATH_PREFIX}/`)) {
    return pathname.slice(FRENCH_PATH_PREFIX.length) || "/";
  }

  return pathname;
};

export const getPathnameForLanguage = (pathname, language) => {
  const pathnameWithoutLanguage = stripLanguagePathname(pathname);

  if (language === "fr") {
    return pathnameWithoutLanguage === "/"
      ? FRENCH_PATH_PREFIX
      : `${FRENCH_PATH_PREFIX}${pathnameWithoutLanguage}`;
  }

  return pathnameWithoutLanguage;
};

export const getLocalizedPath = (to, language) => {
  if (!to.startsWith("/")) {
    return to;
  }

  const [pathAndSearch, hash = ""] = to.split("#");
  const [pathname = "/", search = ""] = pathAndSearch.split("?");
  const localizedPathname = getPathnameForLanguage(pathname || "/", language);

  return `${localizedPathname}${search ? `?${search}` : ""}${
    to.includes("#") ? `#${hash}` : ""
  }`;
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }

  return context;
};
