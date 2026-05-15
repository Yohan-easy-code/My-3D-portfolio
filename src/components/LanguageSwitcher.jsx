import React, { useId } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { getPathnameForLanguage, useLanguage } from "../i18n/languageCore";

const languages = [
  { code: "en", label: "English", shortLabel: "EN" },
  { code: "fr", label: "Français", shortLabel: "FR" },
];

const EnglishFlag = () => {
  const id = useId().replaceAll(":", "");
  const clipId = `${id}-en-clip`;
  const shineId = `${id}-en-shine`;

  return (
    <svg viewBox="0 0 48 48" aria-hidden="true" className="h-full w-full">
    <defs>
      <clipPath id={clipId}>
        <circle cx="24" cy="24" r="22" />
      </clipPath>
      <linearGradient id={shineId} x1="8" x2="40" y1="8" y2="40">
        <stop stopColor="#fff" stopOpacity="0.55" />
        <stop offset="0.42" stopColor="#fff" stopOpacity="0.08" />
        <stop offset="1" stopColor="#000" stopOpacity="0.24" />
      </linearGradient>
    </defs>
    <g clipPath={`url(#${clipId})`}>
      <rect width="48" height="48" fill="#173A88" />
      <path d="M-4 4 44 52M52 4 4 52" stroke="#fff" strokeWidth="11" />
      <path d="M-4 4 44 52M52 4 4 52" stroke="#D72130" strokeWidth="6" />
      <path d="M24 0v48M0 24h48" stroke="#fff" strokeWidth="15" />
      <path d="M24 0v48M0 24h48" stroke="#D72130" strokeWidth="9" />
      <rect width="48" height="48" fill={`url(#${shineId})`} />
    </g>
    <circle cx="24" cy="24" r="22" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="2" />
  </svg>
  );
};

const FrenchFlag = () => {
  const id = useId().replaceAll(":", "");
  const clipId = `${id}-fr-clip`;
  const shineId = `${id}-fr-shine`;

  return (
    <svg viewBox="0 0 48 48" aria-hidden="true" className="h-full w-full">
    <defs>
      <clipPath id={clipId}>
        <circle cx="24" cy="24" r="22" />
      </clipPath>
      <linearGradient id={shineId} x1="8" x2="40" y1="8" y2="40">
        <stop stopColor="#fff" stopOpacity="0.55" />
        <stop offset="0.45" stopColor="#fff" stopOpacity="0.08" />
        <stop offset="1" stopColor="#000" stopOpacity="0.22" />
      </linearGradient>
    </defs>
    <g clipPath={`url(#${clipId})`}>
      <rect width="16" height="48" fill="#1A47B8" />
      <rect x="16" width="16" height="48" fill="#fff" />
      <rect x="32" width="16" height="48" fill="#E42134" />
      <rect width="48" height="48" fill={`url(#${shineId})`} />
    </g>
    <circle cx="24" cy="24" r="22" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="2" />
  </svg>
  );
};

const flagIcons = {
  en: EnglishFlag,
  fr: FrenchFlag,
};

const LanguageSwitcher = ({ compact = false }) => {
  const { language, setLanguage } = useLanguage();
  const location = useLocation();
  const navigate = useNavigate();

  const handleLanguageChange = (nextLanguage) => {
    const nextPathname = getPathnameForLanguage(
      location.pathname,
      nextLanguage,
    );

    setLanguage(nextLanguage);
    navigate(`${nextPathname}${location.search}${location.hash}`, {
      replace: false,
    });
  };

  return (
    <div
      className={`flex items-center rounded-full border border-white/10 bg-white/5 p-1 shadow-lg shadow-black/20 backdrop-blur ${
        compact ? "w-full justify-between" : ""
      }`}
      aria-label="Language selector"
      role="group"
    >
      {languages.map((item) => {
        const Flag = flagIcons[item.code];
        const isActive = language === item.code;

        return (
          <button
            key={item.code}
            type="button"
            aria-label={`Switch language to ${item.label}`}
            aria-pressed={isActive}
            title={item.label}
            onClick={() => handleLanguageChange(item.code)}
            className={`flex items-center gap-2 rounded-full px-2 py-1.5 text-xs font-semibold transition ${
              isActive
                ? "bg-white text-black shadow-md"
                : "text-white/70 hover:bg-white/10 hover:text-white"
            } ${compact ? "flex-1 justify-center" : ""}`}
          >
            <span className="h-7 w-7 rounded-full">
              <Flag />
            </span>
            <span>{item.shortLabel}</span>
          </button>
        );
      })}
    </div>
  );
};

export default LanguageSwitcher;
