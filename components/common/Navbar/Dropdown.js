import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useWindowDimensions } from "@/utils/screen-measure/getWindowDimensions";
import { MdKeyboardArrowDown } from "react-icons/md";

function Dropdown({ list, currentNavState, setCurrentNavState, setmobileMenuIsOpen, isNavbarShort }) {
    const dropdownRef = useRef(null);
    const { width } = useWindowDimensions();
    const [isOpen, setIsOpen] = useState(false);
    const [isDesktop, setIsDesktop] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const handleResize = () => {
            setIsDesktop(window.innerWidth >= 1024); // lg breakpoint
        };
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };
        if (isDesktop) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [isDesktop]);

    let subSelectors = [];
    let name = "";

    if (list != null && list.sub != null) {
        name = list.title.toString();
        subSelectors = Object.values(list.sub);
    }

    // Check if content is loaded
    useEffect(() => {
        if (name && name !== "" && name !== "undefined") {
            setIsLoading(false);
        } else {
            setIsLoading(true);
        }
    }, [name]);

    useEffect(() => {
        setIsOpen(currentNavState === name);
    }, [currentNavState, name]);

    function handleDropdown() {
        setCurrentNavState(currentNavState === name ? "" : name);
    }

    function hideMenus() {
        if (setmobileMenuIsOpen) {
            setmobileMenuIsOpen(false);
        }
        setIsOpen(false);
    }

    const buttonStyles = {
        desktop: `text-gray-700 hover:text-black cursor-pointer font-medium px-4 py-2 transition-all duration-200 rounded-md hover:bg-gray-100 flex items-center`,
        mobile: "flex items-center justify-between w-full p-3 rounded-md hover:bg-gray-50 transition-colors duration-200",
        selected: "text-black cursor-pointer font-semibold px-4 py-2 bg-gray-100 rounded-md transition-all duration-200 flex items-center"
    };

    // Spinner component
    const Spinner = () => (
        <div className="animate-spin rounded-full h-4 w-4 border-2 border-gray-300 border-t-gray-600"></div>
    );

    // Show spinner while loading
    if (isLoading) {
        return (
            <div className="relative" ref={dropdownRef}>
                {isDesktop ? (
                    <div className="flex items-center text-gray-700 px-4 py-2 rounded-md">
                        <Spinner />
                    </div>
                ) : (
                    <div className="w-full">
                        <div className="flex items-center justify-between w-full p-3 rounded-md">
                            <Spinner />
                        </div>
                    </div>
                )}
            </div>
        );
    }

    return (
        <div className="relative" ref={dropdownRef}>
            {/* Desktop Dropdown */}
            {isDesktop ? (
                <div className="relative">
                    <button
                        onClick={handleDropdown}
                        className={
                            currentNavState === name
                                ? buttonStyles.selected
                                : buttonStyles.desktop
                        }
                    >
                        <span>{name}</span>
                        <div className={`transform transition-transform duration-200 ease-in-out ml-1 ${isOpen ? 'rotate-180' : 'rotate-0'}`}>
                            <MdKeyboardArrowDown className="w-4 h-4" />
                        </div>
                    </button>

                    {/* Desktop Dropdown Menu */}
                    <div 
                        className={`
                            absolute top-full left-0 mt-1 w-64 bg-white rounded-md shadow-lg border border-gray-200 z-50
                            transition-all duration-200 ease-in-out
                            ${isOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'}
                        `}
                    >
                        <div className="py-2">
                            {subSelectors.map((item, i) => (
                                <Link 
                                    key={`desktop-dropdown-${name}-${i}-${item.name}`}
                                    href={item.href} 
                                    onClick={hideMenus}
                                    className="block px-4 py-2 text-gray-700 hover:text-black hover:bg-gray-50 transition-colors duration-200"
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            ) : (
                /* Mobile Dropdown */
                <div className="w-full">
                    <button
                        onClick={handleDropdown}
                        className={buttonStyles.mobile}
                    >
                        <span className="text-gray-700 font-medium">{name}</span>
                        <div className={`transform transition-transform duration-200 ease-in-out ${isOpen ? 'rotate-180' : 'rotate-0'}`}>
                            <MdKeyboardArrowDown className="w-5 h-5 text-gray-400" />
                        </div>
                    </button>

                    {/* Mobile Dropdown Menu */}
                    <div 
                        className={`
                            overflow-hidden transition-all duration-200 ease-in-out
                            ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}
                        `}
                    >
                        <div className="ml-4 mt-1 space-y-1">
                            {subSelectors.map((item, i) => (
                                <Link 
                                    key={`mobile-dropdown-${name}-${i}-${item.name}`}
                                    href={item.href} 
                                    onClick={hideMenus}
                                    className="block px-4 py-2 text-sm text-gray-600 hover:text-black hover:bg-gray-50 rounded-md transition-colors duration-200"
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Dropdown;