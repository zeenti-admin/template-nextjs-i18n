//Functions
import TranslationsProvider from "@/TranslationsProvider";
import initTranslations from "@/i18n";
import dynamic from "next/dynamic";
import Script from "next/script";

// Import Container component
import Main from "@/components/blog/Main";

//Different namespaces
const i18nNameSpaces = ["home", "navbar", "footer", "common"];

const metadata_en = {
  metadataBase: new URL('https://www.zeenti.com'),
  title: "Zeenti - Digital Excellence & Innovation - Zeenti Digital Consulting LLC.",
  description: "Transform your business with Zeenti Digital Consulting LLC. Expert web development, mobile apps, digital strategy, and cloud solutions. Innovative consulting for modern businesses.",
  keywords: "digital consulting, web development, mobile applications, digital strategy, cloud solutions, IT consulting, business transformation, technology consulting, digital innovation",
  language: "en",
  subject: "Digital Consulting Services",
  coverage: "Global",
  robots: "index, follow",
  author: "Zeenti Digital Consulting",
  publisher: "Zeenti Digital Consulting LLC",
  og: {
    type: "website",
    title: "Zeenti Digital Consulting - Transform Your Business Digitally",
    description: "Expert digital consulting services including web development, mobile apps, and digital strategy. Transform your business with innovative technology solutions.",
    site_name: "Zeenti Digital Consulting",
    url: "https://www.zeenti.com/en/"
  },
  alternates: {
    canonical: "https://www.zeenti.com/en",
    languages: {
      'en': '/en',
      'es': '/es',
      'fr': '/fr'
    }
  }
};

const metadata_es = {
  metadataBase: new URL('https://www.zeenti.com'),
  title: "Zeenti - Excelencia Digital e Innovación - Zeenti Digital Consulting LLC.",
  description: "Transforma tu negocio con Zeenti Digital Consulting LLC. Desarrollo web experto, aplicaciones móviles, estrategia digital y soluciones en la nube. Consultoría innovadora para empresas modernas.",
  keywords: "consultoría digital, desarrollo web, aplicaciones móviles, estrategia digital, soluciones en la nube, consultoría de TI, transformación empresarial, consultoría tecnológica, innovación digital",
  language: "es",
  subject: "Servicios de Consultoría Digital",
  coverage: "Global",
  robots: "index, follow",
  author: "Zeenti Digital Consulting",
  publisher: "Zeenti Digital Consulting LLC",
  og: {
    type: "website",
    title: "Zeenti Digital Consulting - Transforma Tu Negocio Digitalmente",
    description: "Servicios expertos de consultoría digital incluyendo desarrollo web, aplicaciones móviles y estrategia digital. Transforma tu negocio con soluciones tecnológicas innovadoras.",
    site_name: "Zeenti Digital Consulting",
    url: "https://www.zeenti.com/es/"
  },
  alternates: {
    canonical: "https://www.zeenti.com/es",
    languages: {
      'en': '/en',
      'es': '/es',
      'fr': '/fr'
    },
    openGraph: {
      images: {}
    }
  }
};

const metadata_fr = {
  metadataBase: new URL('https://www.zeenti.com'),
  title: "Zeenti - Excellence Numérique et Innovation - Zeenti Digital Consulting LLC.",
  description: "Transformez votre entreprise avec Zeenti Digital Consulting LLC. Développement web expert, applications mobiles, stratégie numérique et solutions cloud. Conseil innovant pour les entreprises modernes.",
  keywords: "conseil numérique, développement web, applications mobiles, stratégie numérique, solutions cloud, conseil en TI, transformation d'entreprise, conseil technologique, innovation numérique",
  language: "fr",
  subject: "Services de Conseil Numérique",
  coverage: "Global",
  robots: "index, follow",
  author: "Zeenti Digital Consulting",
  publisher: "Zeenti Digital Consulting LLC",
  og: {
    type: "website",
    title: "Zeenti Digital Consulting - Transformez Votre Entreprise Numériquement",
    description: "Services experts de conseil numérique incluant le développement web, les applications mobiles et la stratégie numérique. Transformez votre entreprise avec des solutions technologiques innovantes.",
    site_name: "Zeenti Digital Consulting",
    url: "https://www.zeenti.com/fr/"
  },
  alternates: {
    canonical: "https://www.zeenti.com/fr",
    languages: {
      'en': '/en',
      'es': '/es',
      'fr': '/fr'
    },
    openGraph: {
      images: {}
    }
  }
};

export async function generateMetadata({ params }) {
  // Await params before destructuring
  const { locale } = await params;
  
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

export default async function Home({ params }) {
  // Await params before destructuring
  const { locale } = await params;
  
  const { t, resources } = await initTranslations(locale, i18nNameSpaces);

  // Organize all translations
  const allTranslations = {
    homeTranslations: {
      titleOne: t('home:title_one'),
      titleTwo: t('home:title_two'),
      description: t('home:description'),
      cta: t('home:cta'),
      webDevelopment: t('home:webDevelopment'),
      mobileApps: t('home:mobileApps'),
      digitalStrategy: t('home:digitalStrategy'),
      cloudSolutions: t('home:cloudSolutions'),
      projectsDelivered: t('home:projectsDelivered'),
      clientSatisfaction: t('home:clientSatisfaction'),
      supportAvailable: t('home:supportAvailable')
    }
  };

  // When you have us-UK or es-MX, you want to use the main language for translations
  const mainLang = locale.split('-')[0];

  return (
    <>
      <TranslationsProvider
        resources={resources}
        locale={locale}
        namespaces={i18nNameSpaces}
      >
        <Main 
 
        />
      </TranslationsProvider>
    </>
  );
}