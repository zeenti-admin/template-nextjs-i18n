'use client'

import { useRouter, usePathname } from 'next/navigation';
import { useTranslation } from 'react-i18next';
import i18nConfig from '@/i18nConfig';
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BiWorld } from "react-icons/bi";

export default function LanguageChanger({ isTop, isCouldBeWorse }) {
  const { i18n } = useTranslation();
  const { t } = useTranslation();
  const currentLocale = i18n.language;
  const router = useRouter();
  const currentPathname = usePathname();

  const [isOpen, setIsOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768); // md breakpoint
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Set loading to false once we have a current locale
  useEffect(() => {
    if (currentLocale) {
      setIsLoading(false);
    }
  }, [currentLocale]);

  const handleFullName = e => {
    if (e === "en") {
      return "EN";
    }
    if (e === "es") {
      return "ES";
    }
    if (e === "es-pr") {
      return "ES"
    }
    if (e === "es-mx") {
      return "ES"
    }
    if (e === "es-ar") {
      return "ES"
    }
    if (e === "es-co") {
      return "ES"
    }
    if (e === "fr") {
      return "FR"
    }
  };
 
  // Handles the language change
  const handleChange = e => {
    const newLocale = e;
    setIsOpen(false);
    // Set cookie for next-i18n-router
    const days = 30;
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    const expires = '; expires=' + date.toUTCString();
    document.cookie = `NEXT_LOCALE=${newLocale};expires=${expires};path=/`;

    // Redirect to the new locale path
    if (currentLocale === i18nConfig.defaultLocale && !i18nConfig.prefixDefault) {
      router.push('/' + newLocale + currentPathname);
    } else {
      router.push(currentPathname.replace(`/${currentLocale}`, `/${newLocale}`));
    }
  };

  // Close the dropdown if clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    if (isDesktop) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dropdownRef, isDesktop]);

  const languages = [
    { code: "en", name: "EN" },
    { code: "es", name: "ES" },
    { code: "fr", name: "FR" }
  ];

  // Spinner component
  const Spinner = () => (
    <div className="animate-spin rounded-full h-4 w-4 border-2 border-gray-300 border-t-gray-600"></div>
  );

  // Show spinner while loading
  if (isLoading) {
    return (
      <div className="relative" ref={dropdownRef}>
        {isDesktop ? (
          <div className="flex items-center text-gray-700 border border-gray-300 rounded-lg px-3 py-2 bg-white">
            <BiWorld className="mr-2 w-4 h-4" />
            <Spinner />
          </div>
        ) : (
          <div className="w-full">
            <div className="flex items-center justify-between w-full p-3 text-gray-700 rounded-md">
              <div className="flex items-center">
                <BiWorld className="mr-3 w-5 h-5" />
                <Spinner />
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Desktop Language Changer */}
      {isDesktop ? (
        <div className="relative">
          <button
            onClick={() => setIsOpen((prev) => !prev)}
            className="flex items-center text-gray-700 hover:text-black border border-gray-300 hover:border-gray-400 rounded-lg px-3 py-2 transition-all duration-200 bg-white hover:bg-gray-50"
          >
            <BiWorld className="mr-2 w-4 h-4" />
            <span className="font-medium text-sm">
              {handleFullName(currentLocale)}
            </span>
            <div className="ml-1">
              {!isOpen ? (
                <MdKeyboardArrowDown className="h-4 w-4" />
              ) : (
                <MdKeyboardArrowUp className="h-4 w-4" />
              )}
            </div>
          </button>

          {/* Desktop Dropdown */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="absolute top-full right-0 mt-1 w-20 bg-white rounded-md shadow-lg border border-gray-200 z-50"
              >
                <div className="py-1">
                  {languages.map((language) => (
                    <button
                      key={`desktop-lang-${language.code}`}
                      onClick={() => handleChange(language.code)}
                      className={`w-full text-left px-3 py-2 text-sm transition-colors duration-200 ${
                        currentLocale === language.code
                          ? 'bg-gray-100 text-black font-semibold'
                          : 'text-gray-700 hover:text-black hover:bg-gray-50'
                      }`}
                    >
                      {language.name}
                    </button>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ) : (
        /* Mobile Language Changer */
        <div className="w-full">
          <button
            onClick={() => setIsOpen((prev) => !prev)}
            className="flex items-center justify-between w-full p-3 text-gray-700 hover:text-black hover:bg-gray-50 rounded-md transition-colors duration-200"
          >
            <div className="flex items-center">
              <BiWorld className="mr-3 w-5 h-5" />
              <span className="font-medium">
                Language ({handleFullName(currentLocale)})
              </span>
            </div>
            <div>
              {!isOpen ? (
                <MdKeyboardArrowDown className="h-5 w-5 text-gray-400" />
              ) : (
                <MdKeyboardArrowUp className="h-5 w-5 text-gray-400" />
              )}
            </div>
          </button>

          {/* Mobile Dropdown */}
          <div 
            className={`
              overflow-hidden transition-all duration-200 ease-in-out
              ${isOpen ? 'max-h-32 opacity-100' : 'max-h-0 opacity-0'}
            `}
          >
            <div className="ml-4 mt-1 space-y-1">
              {languages.map((language) => (
                <button
                  key={`mobile-lang-${language.code}`}
                  onClick={() => handleChange(language.code)}
                  className={`block w-full text-left px-4 py-2 text-sm rounded-md transition-colors duration-200 ${
                    currentLocale === language.code
                      ? 'bg-gray-100 text-black font-semibold'
                      : 'text-gray-600 hover:text-black hover:bg-gray-50'
                  }`}
                >
                  {language.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}