//Functions 
import Image from 'next/image'
import TranslationsProvider from "@/TranslationsProvider";
import initTranslations from "@/i18n";
const i18nNameSpaces = ["home"];


export const metadata = {
  title: "Page Not Found - TopTier Trader",
  description:
    "TopTier Trader is an evaluation company that is searching for experienced traders. Get Funded and start your journey today!",
};

export default async function NotFound() {
  const { t, resources } = await initTranslations("en", i18nNameSpaces);

  const bgImageStyle = {
    backgroundColor: 'hsla(219,45%,7%,1)',
    backgroundImage: `
      radial-gradient(at 63% 43%, hsla(217,43%,7%,1) 0px, transparent 50%),
      radial-gradient(at 63% 59%, hsla(197,100%,32%,0.2) 0px, transparent 50%),
      radial-gradient(at 80% 94%, hsla(218,44%,7%,1) 0px, transparent 50%),
      radial-gradient(at 39% 40%, hsla(218,44%,7%,1) 0px, transparent 50%),
      radial-gradient(at 39% 76%, hsla(218,44%,7%,1) 0px, transparent 50%),
      radial-gradient(at 99% 46%, hsla(212,100%,20%,1) 0px, transparent 50%),
      radial-gradient(at 51% 0%, hsla(212,100%,20%,1) 0px, transparent 50%),
      radial-gradient(at 0% 47%, hsla(212,100%,15%,1) 0px, transparent 50%),
      radial-gradient(at 0% 61%, hsla(197,100%,32%,0.6) 0px, transparent 50%)
    `
  };



  return (

    <TranslationsProvider
      resources={resources}
      locale={"en"}
      namespaces={i18nNameSpaces}
    >
      <div className='flex flex-col  items-center -mt-0 py-24 mb:mt-0 mb:py-40 ' style={bgImageStyle}>
        <p className='pt-20 pb-5 font-semibold text-7xl bg-gradient-to-r from-[#45D1FF] to-[#167BCC] inline-block text-transparent bg-clip-text'>404</p>
        <p className='text-white text-center text-3xl mb:text-4xl font-light'>Opps... Something went wrong</p>
        <p className='mt-5 text-secondary'>Let us guide you back</p>
        <a href="https://www.toptiertrader.com">
          <button className='text-white py-2 px-3 border text-sm border-slate-300 rounded-lg mt-5' >
            Back to Home Page
          </button>
        </a>
      </div>
    </TranslationsProvider>

  );
}