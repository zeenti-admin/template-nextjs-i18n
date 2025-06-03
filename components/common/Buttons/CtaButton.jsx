'use client'

import Link from "next/link"
import { track } from '@vercel/analytics'
import { FaArrowRight } from "react-icons/fa"

function CtaButton({ utm, page, section, translation, color = 'orange' }) {

    const isLatam = false

    //UTM should be Page / Section / CTA Cliked
    //Home Page -> Home / Landing Section / CTA Clicked

    //Home Page -> Blog / Levels Trading: Community Reviews  / CTA Clicked

    return (
        <a href={utm} onClick={() => track(`${isLatam && 'LATAM '}${page} - ${section} - CTA Clicked `)} rel="noopener noreferrer"
            className="transition-all hover:scale-105">
            <button className={`flex flex-row mt-5 mb:mt-0 items-center text-sm rounded-lg ${color === 'orange' ? 'bg-[#FF532D] hover:bg-orange-700 text-white' : 'bg-[#45D1FF] hover:bg-[#2090B5] text-[#0B111D]'} transition-all py-2 px-4 scaleIn`}>
                {translation}
                <FaArrowRight className="w-3 h-3 ml-2" />
            </button>
        </a>
    )
}

export default CtaButton
