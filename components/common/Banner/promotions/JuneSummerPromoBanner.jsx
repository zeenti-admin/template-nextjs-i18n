'use client'

import { useWindowDimensions } from '@/utils/screen-measure/getWindowDimensions';
import { useState, useEffect, use } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { track } from '@vercel/analytics'
import Image from 'next/image';

//Images
import desktopBg from '../assets/JuneSummerPromoBanner/bg_desktop.png'
import mobileBg from '../assets/JuneSummerPromoBanner/bg_mobile.png'
import validImgEn from '../assets/JuneSummerPromoBanner/valid_en.svg'
import validImgEs from '../assets/JuneSummerPromoBanner/valid_es.svg'
import promoImg from '../assets/JuneSummerPromoBanner/promo.png'



function JuneSummerPromoBanner({ locale, translations }) {
    const width = useWindowDimensions().width;
    const [currentBg, setCurrentBg] = useState(mobileBg);

    useEffect(() => {
        setCurrentBg(width > 500 ? desktopBg : mobileBg)
    }, [width]);

    const mainLang = locale.split('-')[0]
    console.log

    const bgImageStyle = {
        background: "black",
        backgroundPosition: "center",
        backgroundImage: `url(${currentBg.src})`,
    };
    return (
        <a href="https://app.toptiertrader.com/buy-challenge/?el=JuneSummerPromoBanner_WebsiteBanner&hcategory=June2025&htrafficsource=Website&id=cad77f17-0cb5-4e7d-8a71-644f4a3f6a17&addons=doubleLeverage&addons=tradeOnWeekends&addons=higherProfitShare&addons=maxLoss&promo=JUNE100"
            onClick={() => { track('Banner - May 20% Off - MAY25') }}>
            <AnimatePresence>
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 50 }}
                    transition={{ duration: 0.5 }}
                    className="cursor-pointer shadow-2xl -mb-1 mb:mb-0 fixed bottom-0 left-0 right-0 rounded-t-2xl flex flex-row justify-start pl-3 mb:pl-0 mb:justify-center items-center w-full h-24 mb:h-20  z-30 " style={bgImageStyle}
                >
                    {/* Mobile */}
                    <div className="mb:hidden flex flex-row items-center w-full ">

                        <section className='flex flex-col items-center -ml-3 mt-1' >

                            <div className='flex flex-row items-center'>
                                <p className='text-2xl font-semibold text-white '> Up to 35% OFF!  </p>
                                <p className='text-2xl font-medium ml-1 text-white '> + </p>
                                <section className='flex text-sm font-semibold text-white  flex-col items-center ml-1'>
                                    <p>{mainLang == 'es' ? "DOBLE" : "DOUBLE LEVERAGE"}</p>
                                    <p className='-mt-1'>{mainLang == 'es' ? "APALANACAMIENTO" : "ON ALL ACCOUNTS"}</p>
                                </section>
                            </div>

                            <section className='bg-gradient-to-r mt-1 ml-2 rounded-md from-[#45D1FF] to-[#DF523D] px-[1px] py-[1px] '>
                                <div className=' rounded-md px-5 bg-gradient-to-r from-[#2B497C] to-[#733F43] py-1'>
                                    <p className='text-white text-sm font-medium'> Promo Code: <span className='font-light'> June + the number of your Challenge  </span></p>
                                </div>
                            </section>

                        </section>

                    </div>

                    {/* Desktop */}
                    <div className="hidden mb:flex mb:flex-row relative items-center ">

                        <section className='flex font-semibold italic text-white text-3xl flex-col items-start ml-10' >
                            <p className='bg-gradient-to-r from-[#0152B4] px-2 to-[#DF523D] '>Summer Wins</p>
                            <p className='bg-gradient-to-r from-[#0152B4] px-2 to-[#DF523D] '>Start Here</p>

                        </section>

                        <section className='flex flex-col items-center ml-10 mt-1' >

                            <div className='flex flex-row items-center'>
                                <p className='text-4xl font-semibold text-white '> Up to 35% OFF!  </p>
                                <p className='text-4xl font-medium ml-2 text-white '> + </p>
                                <section className='flex text-white  flex-col items-center ml-2'>
                                    <p>{mainLang == 'es' ? "DOBLE" : "DOUBLE LEVERAGE"}</p>
                                    <p className='-mt-2'>{mainLang == 'es' ? "APALANACAMIENTO" : "ON ALL ACCOUNTS"}</p>
                                </section>
                            </div>

                            <section className='bg-gradient-to-r mt-1 rounded-md from-[#45D1FF] to-[#DF523D] px-[1px] py-[1px] '>
                                <div className=' rounded-md px-5 bg-gradient-to-r from-[#2B497C] to-[#733F43] py-1'>
                                    <p className='text-white text-lg font-medium'> Promo Code: <span className='font-light'> June + the number of your Challenge  </span></p>
                                </div>
                            </section>

                        </section>

                        <p className='ml-5 mr-16 '>
                            <Image src={mainLang == 'es' ? validImgEs : validImgEn} alt="valid" width={95} height={95} className='object-contain' />
                        </p>
                    </div>
                </motion.div>
            </AnimatePresence>
        </a>
    );
}

export default JuneSummerPromoBanner;
