import React from 'react';
import Image from 'next/image';
import Link from "next/link";
import { BsInstagram, BsLinkedin, BsTwitterX, BsFacebook, BsGithub } from 'react-icons/bs';
import { MdEmail, MdPhone, MdLocationOn } from 'react-icons/md';

const Footer = ({ locale, translations }) => {
    const {
        disclaimer,
        termsLink,
        privacyLink,
        refundLink,
        services,
        resources,
        company,
        about,
        contact,
        careers,
        webDevelopment,
        mobileApps,
        digitalStrategy,
        itConsulting,
        cloudSolutions,
        blog,
        caseStudies,
        whitepapers,
        documentation,
        supportCenter,
        aboutUs,
        ourTeam,
        contactUs,
        partners,
        cookiePolicy,
        dataProtection,
        businessHours,
        mondayFriday,
        timeRange,
        companyDescription,
        disclaimerTitle,
        allRightsReserved
    } = translations || {};

    // Default fallbacks
    const defaults = {
        services: "Services",
        resources: "Resources", 
        company: "Company",
        webDevelopment: "Web Development",
        mobileApps: "Mobile Applications",
        digitalStrategy: "Digital Strategy",
        itConsulting: "IT Consulting",
        cloudSolutions: "Cloud Solutions",
        blog: "Blog",
        caseStudies: "Case Studies",
        whitepapers: "Whitepapers",
        documentation: "Documentation",
        supportCenter: "Support Center",
        aboutUs: "About Us",
        ourTeam: "Our Team",
        careers: "Careers",
        contactUs: "Contact Us",
        partners: "Partners",
        privacyLink: "Privacy Policy",
        termsLink: "Terms of Service",
        cookiePolicy: "Cookie Policy",
        dataProtection: "Data Protection",
        businessHours: "Business Hours",
        mondayFriday: "Monday - Friday",
        timeRange: "9:00am CST - 5:00pm CST",
        companyDescription: "Digital Consulting LLC providing innovative solutions for modern businesses. Transforming ideas into digital reality.",
        disclaimerTitle: "PROFESSIONAL DISCLAIMER",
        allRightsReserved: "All rights reserved",
        disclaimer: "All consulting services and digital solutions provided by Zeenti Digital Consulting LLC are for informational and strategic purposes only. While we strive to provide accurate and up-to-date information, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability of our services. Results may vary based on individual business circumstances, market conditions, and implementation of our recommendations. Past performance and case studies are not necessarily indicative of future results. Clients are advised to seek appropriate professional advice before making business decisions based on our consulting services."
    };

    const socialLinks = [
        { href: 'https://www.linkedin.com/company/zeenti', Icon: BsLinkedin, alt: 'LinkedIn', label: 'Follow us on LinkedIn' },
        { href: 'https://twitter.com/zeenti', Icon: BsTwitterX, alt: 'Twitter', label: 'Follow us on Twitter' },
        { href: 'https://www.facebook.com/zeenti', Icon: BsFacebook, alt: 'Facebook', label: 'Like us on Facebook' },
        { href: 'https://github.com/zeenti', Icon: BsGithub, alt: 'GitHub', label: 'Check out our GitHub' },
        { href: 'https://www.instagram.com/zeenti', Icon: BsInstagram, alt: 'Instagram', label: 'Follow us on Instagram' }
    ];

    return (
        <footer className="bg-gray-50 border-t border-gray-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Company Info */}
                    <div className="lg:col-span-1">
                        <div className="flex items-center mb-4">
                            <h2 className="text-2xl font-bold text-black">Zeenti</h2>
                        </div>
                        <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                            {companyDescription || defaults.companyDescription}
                        </p>
                        
                        {/* Contact Information */}
                        <div className="space-y-3 mb-6">
                            <div className="flex items-center text-sm text-gray-600">
                                <MdLocationOn className="w-4 h-4 mr-2 text-gray-500" />
                                <span>8325 NE 2ND AVE, STE 348, MIAMI, FL 33138</span>
                            </div>
                            <div className="flex items-center text-sm text-gray-600">
                                <MdEmail className="w-4 h-4 mr-2 text-gray-500" />
                                <a href="mailto:natalia@zeenti.com" className="hover:text-black transition-colors">
                                    natalia@zeenti.com
                                </a>
                            </div>
                            <div className="flex items-center text-sm text-gray-600">
                                <MdPhone className="w-4 h-4 mr-2 text-gray-500" />
                                <a href="tel:5868004948" className="hover:text-black transition-colors">
                                    586 800 4948
                                </a>
                            </div>
                        </div>

                        {/* Business Hours */}
                        <div className="mb-6">
                            <h4 className="font-semibold text-black mb-2 text-sm">{businessHours || defaults.businessHours}</h4>
                            <p className="text-sm text-gray-600">{mondayFriday || defaults.mondayFriday}</p>
                            <p className="text-sm text-gray-600">{timeRange || defaults.timeRange}</p>
                        </div>

                        {/* Social Media */}
                        <div className="flex space-x-4">
                            {socialLinks.map(({ href, Icon, alt, label }) => (
                                <a
                                    key={alt}
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-500 hover:text-black transition-colors duration-200"
                                    aria-label={label}
                                >
                                    <span className="sr-only">{label}</span>
                                    <Icon className="h-5 w-5" aria-hidden="true" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="text-black font-semibold mb-4 text-sm uppercase tracking-wider">{services || defaults.services}</h3>
                        <ul className="space-y-3">
                            <li>
                                <Link href="/web-development" className="text-gray-600 hover:text-black transition-colors duration-200 text-sm">
                                    {webDevelopment || defaults.webDevelopment}
                                </Link>
                            </li>
                            <li>
                                <Link href="/mobile-apps" className="text-gray-600 hover:text-black transition-colors duration-200 text-sm">
                                    {mobileApps || defaults.mobileApps}
                                </Link>
                            </li>
                            <li>
                                <Link href="/digital-strategy" className="text-gray-600 hover:text-black transition-colors duration-200 text-sm">
                                    {digitalStrategy || defaults.digitalStrategy}
                                </Link>
                            </li>
                            <li>
                                <Link href="/consulting" className="text-gray-600 hover:text-black transition-colors duration-200 text-sm">
                                    {itConsulting || defaults.itConsulting}
                                </Link>
                            </li>
                            <li>
                                <Link href="/cloud-solutions" className="text-gray-600 hover:text-black transition-colors duration-200 text-sm">
                                    {cloudSolutions || defaults.cloudSolutions}
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Resources */}
                    <div>
                        <h3 className="text-black font-semibold mb-4 text-sm uppercase tracking-wider">{resources || defaults.resources}</h3>
                        <ul className="space-y-3">
                            <li>
                                <Link href="/blog" className="text-gray-600 hover:text-black transition-colors duration-200 text-sm">
                                    {blog || defaults.blog}
                                </Link>
                            </li>
                            <li>
                                <Link href="/case-studies" className="text-gray-600 hover:text-black transition-colors duration-200 text-sm">
                                    {caseStudies || defaults.caseStudies}
                                </Link>
                            </li>
                            <li>
                                <Link href="/whitepapers" className="text-gray-600 hover:text-black transition-colors duration-200 text-sm">
                                    {whitepapers || defaults.whitepapers}
                                </Link>
                            </li>
                            <li>
                                <Link href="/documentation" className="text-gray-600 hover:text-black transition-colors duration-200 text-sm">
                                    {documentation || defaults.documentation}
                                </Link>
                            </li>
                            <li>
                                <Link href="/support" className="text-gray-600 hover:text-black transition-colors duration-200 text-sm">
                                    {supportCenter || defaults.supportCenter}
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h3 className="text-black font-semibold mb-4 text-sm uppercase tracking-wider">{company || defaults.company}</h3>
                        <ul className="space-y-3">
                            <li>
                                <Link href="/about" className="text-gray-600 hover:text-black transition-colors duration-200 text-sm">
                                    {aboutUs || defaults.aboutUs}
                                </Link>
                            </li>
                            <li>
                                <Link href="/team" className="text-gray-600 hover:text-black transition-colors duration-200 text-sm">
                                    {ourTeam || defaults.ourTeam}
                                </Link>
                            </li>
                            <li>
                                <Link href="/careers" className="text-gray-600 hover:text-black transition-colors duration-200 text-sm">
                                    {careers || defaults.careers}
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="text-gray-600 hover:text-black transition-colors duration-200 text-sm">
                                    {contactUs || defaults.contactUs}
                                </Link>
                            </li>
                            <li>
                                <Link href="/partners" className="text-gray-600 hover:text-black transition-colors duration-200 text-sm">
                                    {partners || defaults.partners}
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Legal Links */}
                <div className="border-t border-gray-200 mt-12 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                        <div className="flex flex-wrap gap-6">
                            <Link href="/privacy-policy" className="text-gray-500 hover:text-black transition-colors duration-200 text-sm">
                                {privacyLink || defaults.privacyLink}
                            </Link>
                            <Link href="/terms-of-service" className="text-gray-500 hover:text-black transition-colors duration-200 text-sm">
                                {termsLink || defaults.termsLink}
                            </Link>
                            <Link href="/cookie-policy" className="text-gray-500 hover:text-black transition-colors duration-200 text-sm">
                                {cookiePolicy || defaults.cookiePolicy}
                            </Link>
                            <Link href="/data-protection" className="text-gray-500 hover:text-black transition-colors duration-200 text-sm">
                                {dataProtection || defaults.dataProtection}
                            </Link>
                        </div>
                        <p className="text-gray-500 text-sm">
                            © {new Date().getFullYear()} Zeenti Digital Consulting LLC. {allRightsReserved || defaults.allRightsReserved}.
                        </p>
                    </div>
                </div>

                <div className="border-t border-gray-200 mt-8 pt-8">
                    <div className="bg-gray-100 rounded-lg p-6">
                        <h4 className="font-semibold text-black mb-3 text-sm">{disclaimerTitle || defaults.disclaimerTitle}</h4>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            {disclaimer || defaults.disclaimer}
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;