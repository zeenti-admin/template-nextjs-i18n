import { cookies } from 'next/headers'
import Image from 'next/image'
import bgImgEs from './assets/JuneSummerPromoEs.png'
import bgImgEn from './assets/JuneSummerPromoEn.png'
import { IoClose } from 'react-icons/io5'
import './animations.css'


async function closePopup() {
  'use server'
  cookies().set('JuneSummerPromo', 'closed')
}

function PromoPopUp({ locale }) {
  const cookieStore = cookies()
  const popupState = cookieStore.get('JuneSummerPromo')
  const mainLang = locale.split('-')[0]

  if (popupState?.value === 'closed') return null

  return (
    <div className="popup-container" data-visible="true">
      <div className="popup-content">
        <form action={closePopup}>
          <button className="close-button" aria-label="Close popup">
            <IoClose size={24} />
          </button>
        </form>
        <a href="https://app.toptiertrader.com/buy-challenge/?el=JuneSummerPromo_PopUp&hcategory=June2025&htrafficsource=Website&id=7fc1a973-4d65-4c72-8ea5-33424e3b29d2&addons=doubleLeverage&addons=tradeOnWeekends&addons=higherProfitShare&addons=maxLoss&promo=MD30" 
          target="_blank" alt="Promo PopUp by TopTierTrader" rel="noopener noreferrer">
          <Image
            src={mainLang === 'es' ? bgImgEs : bgImgEn}
            alt='popup-img'
            width='auto'
            height='auto'
            priority
            className='w-96 rounded-lg'
          />
        </a>
      </div>
    </div>
  )
}

export default PromoPopUp