'use client'

//Functional imports
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "next-i18next";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useWindowDimensions } from "@/utils/screen-measure/getWindowDimensions";
import { usePathname } from "next/navigation";

//Vercel
import { track } from '@vercel/analytics'

//Icons
import { IoMdMenu } from "react-icons/io";
import { MdInsertChartOutlined } from "react-icons/md";
import { FaRegUserCircle } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { MdKeyboardArrowRight } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa";

//Logo
import logo from "@/public/imgs/logo.png";

//Components
import Dropdown from "./Dropdown";
import LanguageChanger from "./LanguageChanger";

function Navbar({ locale }) {
  const { t } = useTranslation();
  const [isTop, setIsTop] = useState(true);
  const [isNavbarShort, setIsNavbarShort] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const scrollThreshold = 50;
      setIsTop(scrollTop <= scrollThreshold);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const { width } = useWindowDimensions()

  // Checks if navbar is too wide for the screen
  useEffect(() => {
    if (width < 1515 && width > 1183) {
      setIsNavbarShort(true)
    } else {
      setIsNavbarShort(false)
    }
  }, [width])

  const [currentNavState, setCurrentNavState] = useState("");
  const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false);

  const [isCouldBeWorse, setIsCouldBeWorse] = useState(currentNavState == 'could-be-worse' ? true : false);

  const [pathname, setPathname] = useState(usePathname());
  const path = usePathname()

  useEffect(() => {
    const segments = pathname.split('/').filter(Boolean);
    if (segments[1] === 'could-be-worse') {
      setCurrentNavState('could-be-worse');
    }
  }, []);

  useEffect(() => {
    if (currentNavState === 'could-be-worse') {
      setIsCouldBeWorse(true)
    } else {
      setIsCouldBeWorse(false)
    }
  }, [currentNavState]);

  const handleMenuToggle = () => {
    setMobileMenuIsOpen(!mobileMenuIsOpen);
  };

  const handleCloseMenu = () => {
    setMobileMenuIsOpen(false);
  };

  const linksStyle = {
    desktop: `text-gray-700 hover:text-black cursor-pointer font-medium px-4 py-2 transition-all duration-200 rounded-md hover:bg-gray-100`,
    mobile: "text-gray-700 cursor-pointer font-medium px-4 py-3 text-lg hover:text-black hover:bg-gray-50 transition-all duration-200 rounded-md block w-full text-left",
    selected: "text-black cursor-pointer font-semibold px-4 py-2 bg-gray-100 rounded-md transition-all duration-200"
  };

  const productsDropdown = {
    title: t("navbar:products").toString(),
    sub: {
      onePhase: { name: "One Phase Challenge", href: `https://www.zeenti.com/${locale}/one-phase-challenge` },
      twoPhase: { name: "Flex and Pro Challenge", href: `https://www.zeenti.com/${locale}/two-phase-challenge` },
      quiz: { name: "Trader Quiz", href: `https://www.zeenti.com/${locale}/trader-quiz` }
    }
  };

  const communityDropdown = {
    title: t("navbar:community").toString(),
    sub: {
      discord: { name: "Discord", href: "https://discord.com/invite/WrC2xdZZng" },
      affiliates: { name: t("navbar:affiliates").toString(), href: `https://www.zeenti.com/${locale}/affiliates-program` },
      academy: { name: t("navbar:academy").toString(), href: `https://www.zeenti.com/${locale}/academy` },
      competitions: { name: t("navbar:competitions").toString(), href: "https://app.toptiertrader.com/competitions-overview" },
      leaderboards: { name: t("navbar:leaderboards").toString(), href: "https://app.toptiertrader.com/leaderboard" },
      keynote: { name: 'Keynote 2024', href: "https://keynote.toptiertrader.com" }
    }
  };

  const aboutDropdown = {
    title: t("navbar:about").toString(),
    sub: {
      about: { name: t("navbar:about").toString(), href: `https://www.zeenti.com/${locale}/about` },
      blog: { name: t("navbar:blog").toString(), href: `https://www.zeenti.com/${locale}/blog` },
    }
  }

  return (
    <>
      <nav
        className={`${isTop ? 'bg-white shadow-sm' : 'bg-white/95 backdrop-blur-sm shadow-md'} transition-all duration-300 ease-in-out fixed top-0 w-full z-50 border-b border-gray-200`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <Link href={`https://www.zeenti.com/${locale}`} onClick={() => setCurrentNavState('')} alt="Home">
                <Image
                  src={isCouldBeWorse && isTop ? logoBlack : logo}
                  priority={true}
                  alt="toptier_logo"
                  className="object-contain h-8 w-auto sm:h-10"
                />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              <Dropdown
                list={productsDropdown}
                currentNavState={currentNavState}
                setCurrentNavState={setCurrentNavState}
                handleCloseMenu={handleCloseMenu}
              />

              <Dropdown
                list={communityDropdown}
                currentNavState={currentNavState}
                setCurrentNavState={setCurrentNavState}
                handleCloseMenu={handleCloseMenu}
              />

              <Dropdown
                list={aboutDropdown}
                currentNavState={currentNavState}
                setCurrentNavState={setCurrentNavState}
                handleCloseMenu={handleCloseMenu}
              />

              <Link
                href={`https://www.zeenti.com/${locale}/contact`}
                className={
                  currentNavState === "contact"
                    ? linksStyle.selected
                    : linksStyle.desktop
                }
                onClick={() => setCurrentNavState("contact")}
              >
                {t("navbar:contact")}
              </Link>

              <Link
                href="https://help.toptiertrader.com"
                className={
                  currentNavState === "help_center"
                    ? linksStyle.selected
                    : linksStyle.desktop
                }
                target="_blank"
                onClick={() => setCurrentNavState("help_center")}
              >
                {t("navbar:help_center")}
              </Link>
            </div>

            {/* Right side buttons */}
            <div className="flex items-center space-x-4">
              {/* Language Changer - Hidden on mobile */}
              <div className="hidden md:block">
                <LanguageChanger isTop={isTop} isCouldBeWorse={isCouldBeWorse} />
              </div>


              {/* Get Started Button */}
              <Link
                href="https://www.zeenti.com/free-quote"
                target="_blank"
                className="bg-black hover:bg-gray-800 text-white px-4 py-2 rounded-lg transition-all duration-200 flex items-center"
                onClick={() => track('Navbar - Get Started')}
              >
                <span className="text-sm font-medium">{t("navbar:started")}</span>
                <FaArrowRight className="w-3 h-3 ml-2" />
              </Link>

              {/* Mobile Menu Button */}
              <motion.button
                onClick={handleMenuToggle}
                whileTap={{ scale: 0.95 }}
                className="lg:hidden p-2 rounded-md text-gray-700 hover:text-black hover:bg-gray-100 transition-colors duration-200"
              >
                {mobileMenuIsOpen ? (
                  <IoClose className="w-6 h-6" />
                ) : (
                  <IoMdMenu className="w-6 h-6" />
                )}
              </motion.button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuIsOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden fixed top-16 left-0 right-0 bg-white border-b border-gray-200 shadow-lg z-40"
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 space-y-2">
              {/* Mobile Language Changer */}
              <div className="py-2 border-b border-gray-100">
                <LanguageChanger isTop={isTop} isCouldBeWorse={isCouldBeWorse} />
              </div>

              {/* Mobile Dropdowns */}
              <div className="space-y-2">
                <Dropdown
                  list={productsDropdown}
                  currentNavState={currentNavState}
                  setCurrentNavState={setCurrentNavState}
                  setmobileMenuIsOpen={setMobileMenuIsOpen}
                  handleCloseMenu={handleCloseMenu}
                  isNavbarShort={isNavbarShort}
                />

                <Dropdown
                  list={communityDropdown}
                  currentNavState={currentNavState}
                  setCurrentNavState={setCurrentNavState}
                  setmobileMenuIsOpen={setMobileMenuIsOpen}
                  handleCloseMenu={handleCloseMenu}
                  isNavbarShort={isNavbarShort}
                />

                <Dropdown
                  list={aboutDropdown}
                  currentNavState={currentNavState}
                  setCurrentNavState={setCurrentNavState}
                  setmobileMenuIsOpen={setMobileMenuIsOpen}
                  handleCloseMenu={handleCloseMenu}
                  isNavbarShort={isNavbarShort}
                />
              </div>

              {/* Mobile Links */}
              <div className="space-y-1 border-t border-gray-100 pt-2">
                <Link
                  href={`https://www.zeenti.com/${locale}/contact`}
                  className="flex items-center justify-between p-3 rounded-md hover:bg-gray-50 transition-colors duration-200"
                  onClick={handleCloseMenu}
                >
                  <span className="text-gray-700 font-medium">{t("navbar:contact")}</span>
                  <MdKeyboardArrowRight className="w-5 h-5 text-gray-400" />
                </Link>

                <Link
                  href="https://help.toptiertrader.com"
                  className="flex items-center justify-between p-3 rounded-md hover:bg-gray-50 transition-colors duration-200"
                  onClick={handleCloseMenu}
                  target="_blank"
                >
                  <span className="text-gray-700 font-medium">{t("navbar:help_center")}</span>
                  <MdKeyboardArrowRight className="w-5 h-5 text-gray-400" />
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;