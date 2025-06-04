// app/layout.js
import dynamic from 'next/dynamic';
import TranslationsProvider from "@/TranslationsProvider";
import initTranslations from "@/i18n";
import { Analytics } from "@vercel/analytics/react";
import "@/globals.css";

// Font from Google
import { Inter } from "next/font/google";
const inter = Inter({
  subsets: ["latin"],
  weights: ["300", "400", "500", "700", "900"],
  display: 'swap',
  preload: true,
});

// Components - Remove ssr: false and use regular imports or SSR-compatible dynamic imports
const NavbarLazyLoading = dynamic(
  () => import("@/components/common/Navbar/Main"),
  {
    loading: () => <div className="h-16 animate-pulse bg-gray-100" aria-label="Loading navigation" />,
  }
);

const FooterLazyLoading = dynamic(
  () => import("@/components/common/Footer/Main"),
  {
    loading: () => <div className="h-40 bg-white animate-pulse" aria-label="Loading footer" />,
  }
);

// For client-only components, create a wrapper
const ClientOnlyWrapper = dynamic(
  () => import('@/components/common/ClientOnlyWrapper/ClientOnlyWrapper')
);

const i18nNameSpaces = ["home", "navbar", "common", "footer"];

export default async function Layout({ children, params }) {
  // Await params before destructuring
  const { locale } = await params;

  const { t, resources } = await initTranslations(locale, i18nNameSpaces);

  // Page Translations
  const couponTranslations = {
    off: t('common:coupon_off'),
    lifetime: t('common:coupon_lifetime'),
    payout: t('common:coupon_payout'),
    refund: t('common:coupon_refund'),
    code: t('common:coupon_use_code'),
    click: t('common:click'),
    valid: t('common:valid'),
    hourGet: t('common:hour_get'),
    hourDay: t('common:hour_day'),
    hourOne: t('common:hour_one'),
    hour24: t('common:hour_24'),
    hourPayout: t('common:hour_payout'),
    hourFunded: t('common:hour_funded'),
    hourNowOffering: t('common:hour_now_offering'),
    bebold: {
      bold: t('common:bebold_bold'),
      with: t('common:bebold_with'),
      code: t('common:bebold_code'),
      lifetime: t('common:bebold_lifetime'),
      payout: t('common:bebold_payout'),
      valid: t('common:bebold_valid')
    },
    community: {
      for: t('common:community_for'),
      community: t('common:community_community'),
      until: t('common:community_until'),
      code: t('common:community_code')
    },
  };

  const footerTranslations = {
    products: t('navbar:products'),
    resources: t('navbar:resources'),
    company: t('navbar:company'),
    about: t('navbar:about'),
    affiliates: t('navbar:affiliates'),
    contact: t('navbar:contact'),
    disclaimer: t('footer:disclaimer'),
    termsLink: t('footer:termsLink'),
    privacyLink: t('footer:privacyLink'),
    refundLink: t('footer:refundLink'),
  };

  const cookieTranslations = {
    title: t('common:cookie_title'),
    description: t('common:cookie_desc'),
    agree: t('common:cookie_agree'),
    decline: t('common:cookie_decline')
  }

  return (
    <html lang={locale} suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#ffffff" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
      </head>
      <body className={inter.className}>
        <TranslationsProvider
          resources={resources}
          locale={locale}
          namespaces={i18nNameSpaces}
        >
          {/* Navbar */}
          <NavbarLazyLoading locale={locale} />
          <main className="w-full overflow-x-hidden">
            {children}
          </main>

          {/* Client-only components wrapper */}
          <ClientOnlyWrapper 
            couponTranslations={couponTranslations}
            cookieTranslations={cookieTranslations}
            locale={locale}
          />

          {/* Footer */}
          <FooterLazyLoading locale={locale} translations={footerTranslations} />

          {/* Vercel Analytics */}
          <Analytics />

        </TranslationsProvider>
      </body>
    </html>
  );
}