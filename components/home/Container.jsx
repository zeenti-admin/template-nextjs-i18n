'use client';

import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';


// Minimal loading for dynamic imports
const MinimalLoader = () => <div className="min-h-screen" />;

// Regular Components (lazy loaded)
const LandingSection = dynamic(() => import("./LandingSection/Landing-Section"), {
  loading: () => <MinimalLoader />,
  ssr: false
});

export default function Container({ locale, translations, mainLang }) {

  return (
    <>
          <LandingSection locale={locale} translations={translations.homeTranslations} />
    </>
  );
}