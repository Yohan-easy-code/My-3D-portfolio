import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../constants/site";
import {
  getLocalizedPath,
  stripLanguagePathname,
  useLanguage,
} from "../i18n/languageCore";
import LanguageSwitcher from "./LanguageSwitcher";
import logo from "../assets/logo.svg";
import menu from "../assets/menu.svg";
import close from "../assets/close.svg";

const brandRole = {
  en: "Web Engineer",
  fr: "Ingénieur web",
};

const getActiveLinkId = ({ pathname, hash }) => {
  const pathnameWithoutLanguage = stripLanguagePathname(pathname);

  if (
    pathnameWithoutLanguage === "/projects" ||
    pathnameWithoutLanguage === "/bento-box-archi"
  ) {
    return "projects";
  }

  if (pathnameWithoutLanguage === "/" && hash) {
    const match = navLinks.find((link) => link.to === `/${hash}`);
    return match?.id ?? "";
  }

  return "";
};

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const location = useLocation();
  const active = getActiveLinkId(location);
  const { language, t } = useLanguage();

  const handleNavClick = () => {
    setToggle(false);
  };

  return (
    <nav
      aria-label="Primary"
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to={getLocalizedPath("/", language)}
          className="flex items-center gap-2"
          onClick={() => {
            setToggle(false);
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          <img src={logo} alt="logo" className="w-30 h-20 object-contain" />
          <p className="text-white text-[18px] font-bold cursor-pointer flex">
            Yohan Zouari &nbsp;
            <span className="sm:block hidden">| {t(brandRole)}</span>
          </p>
        </Link>
        <div className="hidden items-center gap-8 sm:flex">
          <ul className="list-none flex flex-row gap-10">
            {navLinks.map((link) => (
              <li
                key={link.id}
                className={`${
                  active === link.id ? "text-white" : "text-secondary"
                } hover:text-white text-[18px] font-medium cursor-pointer`}
              >
                <Link
                  to={getLocalizedPath(link.to, language)}
                  onClick={handleNavClick}
                >
                  {t(link.title)}
                </Link>
              </li>
            ))}
          </ul>
          <LanguageSwitcher />
        </div>
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <button
            type="button"
            aria-controls="mobile-navigation"
            aria-expanded={toggle}
            aria-label={toggle ? "Close menu" : "Open menu"}
            className="flex items-center justify-center"
            onClick={() => setToggle((current) => !current)}
          >
            <img
              src={toggle ? close : menu}
              alt=""
              className="w-7 h-7 object-contain"
            />
          </button>
          <div
            id="mobile-navigation"
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[190px] z-10 rounded-xl`}
          >
            <ul className="list-none flex justify-end items-start flex-1 flex-col gap-4">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${
                    active === link.id ? "text-white" : "text-secondary"
                  } font-poppins font-medium cursor-pointer text-[16px]`}
                >
                  <Link
                    to={getLocalizedPath(link.to, language)}
                    onClick={handleNavClick}
                  >
                    {t(link.title)}
                  </Link>
                </li>
              ))}
              <li className="mt-2 w-full">
                <LanguageSwitcher compact />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
