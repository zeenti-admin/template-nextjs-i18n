//Functions
import TranslationsProvider from "@/TranslationsProvider";
import initTranslations from "@/i18n";
import dynamic from "next/dynamic";
import Script from "next/script";

// Import Container component
import Container from "@/components/home/Container";

// Pop Ups
const PromoPopUp = dynamic(() => import("@/components/common/PopUp/PromoPopUp"), {
  ssr: true
})

//Different namespaces
const i18nNameSpaces = ["home", "navbar", "payout", "common", "table_section", "competitive_edge_section", "comparation_section", "bento_section"];

const metadata_en = {
  metadataBase: new URL('https://www.toptiertrader.com'),
  title: "Your Skills, Big Profit - TopTier Proprietary Trading Firm",
  description: "Join TopTier Trader, the leading proprietary trading evaluation firm. We're looking for skilled traders to fund. Start your trading journey and unlock new opportunities today!",
  keywords: "proprietary trading, get funded, trading evaluation, experienced traders, trading journey, financial markets, trading opportunities",
  language: "en",
  subject: "Proprietary Trading Firm Services",
  coverage: "Global",
  robots: "index, follow",
  author: "TopTier Trader",
  publisher: "TopTier Trader LLC",
  og: {
    type: "website",
    title: "Join TopTier Trader - Exclusive Proprietary Trading Firm",
    description: "Seeking skilled traders for funding at TopTier Trader. Start your proprietary trading journey with us and explore unlimited financial markets opportunities.",
    site_name: "TopTier Trader",
    url: "https://www.toptiertrader.com/en/"
  },
  alternates: {
    canonical: "https://www.toptiertrader.com/en",
    languages: {
      'en': '/en',
      'es': '/es',
      'es-co': '/es-co',
      'es-ar': '/es-ar',
      'es-mx': '/es-mx',
      'es-pr': '/es-pr',
      'fr': '/fr'
    }
  }
};

const metadata_es = {
  metadataBase: new URL('https://www.toptiertrader.com'),
  title: "Fondate con TopTier Trader - Únete a Nuestra Firma de Prop Trading",
  description: "Únete a TopTier Trader, la firma líder en evaluación de trading propietario. Buscamos traders cualificados para financiar. ¡Inicia tu camino en el trading y descubre nuevas oportunidades hoy!",
  keywords: "trading propietario, prop trading, prop firm, fondeate, fondeo de forex, fondeo de cuentas, financiacion simulada, financiamiento para traders, evaluación de trading, traders experimentados, carrera en trading, mercados financieros, oportunidades de trading",
  language: "es",
  subject: "Servicios de Firma de Trading Propietario",
  coverage: "Global",
  robots: "index, follow",
  author: "TopTier Trader",
  publisher: "TopTier Trader LLC",
  og: {
    type: "website",
    title: "Únete a TopTier Trader - Firma Exclusiva de Trading Propietario",
    description: "¿Eres un trader cualificado? Únete a TopTier Trader para obtener financiamiento y elevar tu carrera en trading. ¡Aplica ahora y comienza a operar con nuestro capital!",
    site_name: "TopTier Trader",
    url: "https://www.toptiertrader.com/es/"
  },
  alternates: {
    canonical: "https://www.toptiertrader.com/es",
    languages: {
      'en': '/en',
      'es': '/es',
      'es-co': '/es-co',
      'es-ar': '/es-ar',
      'es-mx': '/es-mx',
      'es-pr': '/es-pr',
      'fr': '/fr'
    },
    openGraph: {
      images: {}
    }
  }
};

const metadata_fr = {
  metadataBase: new URL('https://www.toptiertrader.com'),
  title: "Fondate avec TopTier Trader - Rejoignez Notre Société de Prop Trading",
  description: "Rejoignez TopTier Trader, la société leader en évaluation de trading propriétaire. Nous recherchons des traders qualifiés à financer. Commencez votre parcours de trading et découvrez de nouvelles opportunités dès aujourd'hui !",
  keywords: "trading propriétaire, prop trading, société de prop trading, fonde, financement de forex, financement de comptes, financement simulé, financement pour traders, évaluation de trading, traders expérimentés, carrière en trading, marchés financiers, opportunités de trading",
  language: "fr",
  subject: "Services de Société de Trading Propriétaire",
  coverage: "Global",
  robots: "index, follow",
  author: "TopTier Trader",
  publisher: "TopTier Trader LLC",
  og: {
    type: "website",
    title: "Rejoignez TopTier Trader - Société Exclusive de Trading Propriétaire",
    description: "Êtes-vous un trader qualifié ? Rejoignez TopTier Trader pour obtenir un financement et propulser votre carrière de trading. Postulez maintenant et commencez à trader avec notre capital !",
    site_name: "TopTier Trader",
    url: "https://www.toptiertrader.com/fr/"
  },
  alternates: {
    canonical: "https://www.toptiertrader.com/fr",
    languages: {
      'en': '/en',
      'es': '/es',
      'es-co': '/es-co',
      'es-ar': '/es-ar',
      'es-mx': '/es-mx',
      'es-pr': '/es-pr',
      'fr': '/fr'
    },
    openGraph: {
      images: {}
    }
  }
};

export async function generateMetadata({ params: { locale } }) {
  let returnedMetadata = ''
  if (locale === "en") {
    returnedMetadata = metadata_en
  }
  if (locale === "es") {
    returnedMetadata = metadata_es
  }
  if (locale === "fr") {
    returnedMetadata = metadata_fr
  }
  return returnedMetadata
}

export default async function Home({ params: { locale } }) {
  const { t, resources } = await initTranslations(locale, i18nNameSpaces);

  // Organize all translations
  const allTranslations = {
    homeTranslations: {
      titleOne: t('home:title_one'),
      titleTwo: t('home:title_two'),
      description: t('home:description'),
      cta: t('home:cta'),
      join: t('home:join'),
      reviews: t('home:reviews'),
      mission: t('home:mission'),
      million: t('home:million')
    }
  };

  // When you have us-UK or es-MX, you want to use the main language for translations
  const mainLang = locale.split('-')[0];

  return (
    <>
      {/* Add Trustpilot script */}
      <Script
        id="trustpilot-widget-script"
        type="text/javascript"
        src="//widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js"
        strategy="afterInteractive"
        async
      />

      <TranslationsProvider
        resources={resources}
        locale={locale}
        namespaces={i18nNameSpaces}
      >
        <PromoPopUp locale={locale} />
        <Container 
          locale={locale} 
          translations={allTranslations}
          mainLang={mainLang}
        />
      </TranslationsProvider>
    </>
  );
}