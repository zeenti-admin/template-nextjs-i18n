'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import Script from 'next/script';
import { TbCookie } from "react-icons/tb";

const styles = {
  background: 'rgba(0, 0, 0, 0.3)',
  backdropFilter: 'blur(12px)',
  WebkitBackdropFilter: 'blur(12px)',
};

const initializeGoogleConsentMode = () => {
  window.gtag = function () {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push(arguments);
  };

  gtag('consent', 'default', {
    'ad_storage': 'denied',
    'analytics_storage': 'denied',
    'functionality_storage': 'denied',
    'personalization_storage': 'denied',
    'security_storage': 'granted'
  });
};

const updateConsentState = (hasConsent) => {
  if (typeof window.gtag !== 'undefined') {
    gtag('consent', 'update', {
      'ad_storage': hasConsent ? 'granted' : 'denied',
      'analytics_storage': hasConsent ? 'granted' : 'denied',
      'functionality_storage': hasConsent ? 'granted' : 'denied',
      'personalization_storage': hasConsent ? 'granted' : 'denied',
      'security_storage': 'granted'
    });
  }
};

const ClarityScript = ({ isActive }) => {
  if (!isActive) return null;
  
  return (
    <Script
      id="microsoft-clarity"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `
          (function(c,l,a,r,i,t,y){
            c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
            t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
            y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
          })(window, document, "clarity", "script", "pm3krnpgtr");
        `
      }}
    />
  );
};

const CookieBanner = ({ onAccept, onDecline, translations }) => {
  return (
    <div className="fixed mb:max-w-[300px] bottom-0 border-t mb:border-r border-slate-300 rounded-t-xl rounded-r-xl p-6 backdrop-filter backdrop-blur z-50" style={styles}>
      <div className="max-w-7xl mx-auto flex flex-col items-start justify-between gap-4">
        <div className='flex flex-row items-start'>
          <TbCookie className='text-white w-5 h-5 mt-1 mr-2' />
          <p className='text-slate-300 text-lg mb:text-xl max-w-[170px] '>{translations.title}</p>
        </div>
        <div className="text-xs text-slate-400 mb-2 pr-2">
          {translations.description}</div>
        <div className="flex flex-row gap-4">
          <button
            onClick={onDecline}
            className="px-4 py-2 bg-transparent border border-slate-400 text-slate-300 rounded text-sm"
          >
             {translations.decline}
          </button>
          <button
            onClick={onAccept}
            className="px-8 py-2 bg-ttorange text-center text-white rounded text-sm"
          >
             {translations.agree}
          </button>
        </div>
      </div>
    </div>
  );
};

const ThirdPartyScripts = () => {
  return (
    <>
      <Script
        id="gtm-base"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            
            gtag('consent', 'default', {
              'ad_storage': 'denied',
              'analytics_storage': 'denied',
              'functionality_storage': 'denied',
              'personalization_storage': 'denied',
              'security_storage': 'granted'
            });
          `
        }}
      />
      <Script
        id="gtm-main"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function(w,d,s,l,i){
              w[l]=w[l]||[];w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});
              var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
              j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
              f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-TR979K9');
          `
        }}
      />
      <Script
        id="google-ads"
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=AW-10784971490"
      />
      <Script
        id="smartlook-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.smartlook||(function(d) {
              var o=smartlook=function(){ o.api.push(arguments)},h=d.getElementsByTagName('head')[0];
              var c=d.createElement('script');o.api=new Array();c.async=true;c.type='text/javascript';
              c.charset='utf-8';c.src='https://web-sdk.smartlook.com/recorder.js';h.appendChild(c);
            })(document);
          `
        }}
      />
      <Script
        id="smartlook-config"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.addEventListener('load', function() {
              if (window.smartlook) {
                window.smartlook('init', 'd4cfb36323b1844abfdd1294e9dd62e4da8f2dae', { region: 'eu' });
              }
            });
          `
        }}
      />
      <Script
        id="google-ads-config"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-10784971490', {
              'allow_ad_personalization_signals': false,
              'restricted_data_processing': true
            });

            if (window.navigator.joinAdInterestGroup) {
              window.navigator.joinAdInterestGroup = function(group, duration) {
                if (group.dailyUpdateUrl) {
                  group.updateUrl = group.dailyUpdateUrl;
                  delete group.dailyUpdateUrl;
                }
                return window.navigator.joinAdInterestGroup(group, duration);
              };
            }
          `
        }}
      />
      <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-TR979K9"
          height="0"
          width="0"
          style={{ display: 'none', visibility: 'hidden' }}
          title="GTM"
        />
      </noscript>
    </>
  );
};

export default function CookieConsentHandler({ translations }) {
  const [showBanner, setShowBanner] = useState(false);
  const [hasConsent, setHasConsent] = useState(false);
  const [isTop, setIsTop] = useState(true);
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    initializeGoogleConsentMode();
    const savedConsent = localStorage.getItem('cookieConsent');
    if (savedConsent === null) {
      setShowBanner(true);
    } else {
      const consentValue = savedConsent === 'true';
      setHasConsent(consentValue);
      updateConsentState(consentValue);
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const scrollThreshold = 100;
      setIsTop(scrollTop <= scrollThreshold);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (showBanner && isTop) {
      setShouldRender(true);
    } else {
      const timer = setTimeout(() => {
        setShouldRender(false);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [showBanner, isTop]);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'true');
    setShowBanner(false);
    setHasConsent(true);
    updateConsentState(true);
    window.dataLayer?.push({
      event: 'cookie_consent_update',
      cookie_consent: 'accepted'
    });
  };

  const handleDecline = () => {
    localStorage.setItem('cookieConsent', 'false');
    setShowBanner(false);
    setHasConsent(false);
    updateConsentState(false);
    window.dataLayer?.push({
      event: 'cookie_consent_update',
      cookie_consent: 'declined'
    });
  };

  return (
    <>
      <AnimatePresence>
        {shouldRender && (
          <motion.div
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed bottom-0 left-0 right-0 z-50"
          >
            <CookieBanner
              onAccept={handleAccept}
              onDecline={handleDecline}
              translations={translations}
            />
          </motion.div>
        )}
      </AnimatePresence>
      <ThirdPartyScripts />
      <ClarityScript isActive={hasConsent} />
    </>
  );
}