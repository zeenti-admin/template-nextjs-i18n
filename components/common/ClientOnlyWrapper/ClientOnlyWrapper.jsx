// components/ClientOnlyWrapper.js
'use client';

import dynamic from 'next/dynamic';

const MainBanner = dynamic(
  () => import("@/components/common/Banner/MainBanner.js"),
  { 
    ssr: false, 
    loading: () => <div className="h-16 animate-pulse bg-gray-100" aria-label="Loading banner" /> 
  }
);

const CookieConsentHandler = dynamic(
  () => import('@/utils/cookies/CookieConsentHandler'),
  { ssr: false }
);

export default function ClientOnlyWrapper({ couponTranslations, cookieTranslations, locale }) {
  return (
    <>
      {/* Promotions Banner*/}
      {/* <MainBanner translations={couponTranslations} locale={locale} /> */}
      
      {/* Cookie Consent Handler */}
      <CookieConsentHandler translations={cookieTranslations} />
    </>
  );
}