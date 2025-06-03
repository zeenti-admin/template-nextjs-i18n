import BoldBeforeComa from '@/utils/blog/boldBeforeComa'
import React from 'react'


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
}

const AMLPolicy = ({translations}) => {
    return (
        <div className="w-full px-5 bg-[#] sm:px-10 lg:px-20 pt-36 pb-24 bg-ttdark text-white overflow-hidden" style={bgImageStyle} >
            <div className="max-w-6xl mx-auto">
                <div className='flex flex-col w-full items-center justify-center pb-6'>
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-medium mb-6 text-white">
                        {translations.h1_title_1} <span className="text-white">{translations.h1_title_2}</span>
                    </h1>
                </div>


                <div className="mb-10 leading-relaxed text-gray-300">
                    <p className="mb-6">{translations.p1_1}</p>
                    <p className="mb-6">{translations.p1_2}</p>
                </div>

                <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-white">{translations.t1}</h2>
                <div className="mb-8 leading-relaxed text-gray-300">
                    <p className="mb-6">{translations.p2_1}</p>
                    <ol className="list-decimal pl-8 mb-6 space-y-2">
                        <li>{translations.p2_2}</li>
                        <li>{translations.p2_3}</li>
                        <li>{translations.p2_4}</li>
                        <li>{translations.p2_5}</li>
                    </ol>
                </div>

                <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-white">{translations.t2}</h2>
                <div className="mb-8 leading-relaxed text-gray-300">
                    <p className="mb-6">{translations.p3_1}</p>
                    <ul className="list-disc pl-8 mb-6 space-y-2">
                        <li>{translations.p3_2}</li>
                        <li>{translations.p3_3}.</li>
                        <li>{translations.p3_4}</li>
                        <li>{translations.p3_5}</li>
                    </ul>
                    <p className="mb-6">{translations.p3_6}</p>
                </div>

                <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-white">{translations.t3}</h2>
                <div className="mb-8 leading-relaxed text-gray-300">
                    <p className="mb-6">{translations.p4_1}</p>
                    <ol className="list-decimal pl-8 mb-6 space-y-2">
                        <li>{translations.p4_2}</li>
                        <li>{translations.p4_3}</li>
                        <li>{translations.p4_4}</li>
                    </ol>
                </div>

                <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-white">{translations.t4}</h2>
                <div className="mb-8 leading-relaxed text-gray-300">
                    <p className="mb-6">{translations.p5_1}</p>
                    <ul className="list-disc pl-8 mb-6 space-y-2">
                        <li>{translations.p5_2}</li>
                        <li>{translations.p5_3}</li>
                        <li>{translations.p5_4}</li>
                    </ul>
                    <p className="mb-6">{translations.p5_5}</p>
                </div>

                <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-white">{translations.t5}</h2>
                <div className="mb-8 leading-relaxed text-gray-300">
                    <p className="mb-6">{translations.p6_1}</p>
                    <ul className="list-disc pl-8 mb-6 space-y-2">
                        <li>{translations.p6_2}</li>
                        <li>{translations.p6_3}</li>
                        <li>{translations.p6_4}</li>
                        <li>{translations.p6_5}</li>
                        <li>{translations.p6_6}</li>
                        <li>{translations.p6_7}</li>
                        <li>{translations.p6_8}</li>
                        <li>{translations.p6_9}</li>
                        <li>{translations.p6_10}</li>
                    </ul>
                    <p className="mb-6">{translations.p6_11}</p>
                </div>

                <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-white">{translations.t6}</h2>
                <div className="mb-8 leading-relaxed text-gray-300">
                    <p className="mb-6">{translations.p7}</p>
                </div>

                <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-white">{translations.t7}</h2>
                <div className="mb-8 leading-relaxed text-gray-300">
                    <p className="mb-6">{translations.p8_1}</p>
                    <p className="mb-6">{translations.p8_2}</p>
                </div>

                <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-white">{translations.t8}</h2>
                <div className="mb-8 leading-relaxed text-gray-300">
                    <p className="mb-6">{translations.p9_1}</p>
                    <ul className="list-disc pl-8 mb-6 space-y-2">
                        <li><BoldBeforeComa inputText={translations.p9_2}/></li>
                        <li><BoldBeforeComa inputText={translations.p9_3}/></li>
                    </ul>
                </div>

                <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-white">{translations.t9}</h2>
                <div className="mb-8 leading-relaxed text-gray-300">
                    <p className="mb-6">{translations.p10_1}</p>
                    <p className="mb-6">{translations.p10_2}</p>
                    <ul className="list-disc pl-8 mb-6 space-y-2">
                        <li>{translations.p10_3}</li>
                        <li>{translations.p10_4}</li>
                        <li>{translations.p10_5}</li>
                    </ul>
                </div>

                <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-white">{translations.t10}</h2>
                <div className="mb-8 leading-relaxed text-gray-300">
                    <p className="mb-6">{translations.p11_1}</p>
                    <ul className="list-disc pl-8 mb-6 space-y-2">
                        <li>{translations.p11_2}</li>
                        <li>{translations.p11_3}</li>
                    </ul>
                </div>

                <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-white">{translations.t11}</h2>
                <div className="mb-8 leading-relaxed text-gray-300">
                    <p className="mb-6">{translations.p12_1}</p>
                    <ul className="list-disc pl-8 mb-6 space-y-2">
                        <li>{translations.p12_2}</li>
                        <li>{translations.p12_3}</li>
                        <li>{translations.p12_4}</li>
                    </ul>
                    <p className="mb-6">{translations.p12_5}</p>
                </div>

                <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-white">{translations.t12}</h2>
                <div className="mb-8 leading-relaxed text-gray-300">
                    <p className="mb-6">{translations.p13_1}</p>
                    <ul className="list-disc pl-8 mb-6 space-y-2">
                        <li><BoldBeforeComa inputText={translations.p13_2}/></li>
                        <li><BoldBeforeComa inputText={translations.p13_3}/></li>
                    </ul>
                    <p className="mb-6">{translations.p13_4}</p>
                </div>

                <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-white">{translations.t13}</h2>
                <div className="mb-8 leading-relaxed text-gray-300">
                    <p className="mb-6">{translations.p14_1}</p>
                    <ul className="list-disc pl-8 mb-6 space-y-2">
                        <li>{translations.p14_2}</li>
                        <li>{translations.p14_3}</li>
                        <li>{translations.p14_4}</li>
                        <li>{translations.p14_5}</li>
                        <li>{translations.p14_6}</li>
                    </ul>
                </div>

                <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-white">{translations.t14}</h2>
                <div className="mb-8 leading-relaxed text-gray-300">
                    <p className="mb-6">{translations.p15_1}</p>
                    <ul className="list-disc pl-8 mb-6 space-y-2">
                        <li>{translations.p15_2}</li>
                        <li>{translations.p15_3}</li>
                    </ul>
                    <p className="mb-6">{translations.p15_4}</p>
                </div>

                <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-white">{translations.t15}</h2>
                <div className="mb-8 leading-relaxed text-gray-300">
                    <p className="mb-6">{translations.p16_1}</p>
                    <ol className="list-decimal pl-8 mb-6 space-y-2">
                        <li>{translations.p16_2}</li>
                        <li>{translations.p16_3}</li>
                        <li>{translations.p16_4}</li>
                        <li>{translations.p16_5}</li>
                        <li>{translations.p16_6}</li>
                    </ol>
                </div>

                <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-white">{translations.t16}</h2>
                <div className="mb-8 leading-relaxed text-gray-300">
                    <p className="mb-6">{translations.p17_1}</p>
                    <ul className="list-disc pl-8 mb-6 space-y-2">
                        <li>{translations.p17_2}</li>
                        <li>{translations.p17_3}</li>
                        <li>{translations.p17_4}</li>
                    </ul>
                </div>

                <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-white">{translations.t17}</h2>
                <div className="mb-8 leading-relaxed text-gray-300">
                    <p className="mb-6">{translations.p18_1}</p>
                    <p className="mb-6">{translations.p18_2}</p>
                    <ul className="list-disc pl-8 mb-6 space-y-2">
                        <li>{translations.p18_3}</li>
                        <li>{translations.p18_4}</li>
                        <li>{translations.p18_5}</li>
                    </ul>
                    <p className="mb-6">{translations.p18_6}</p>
                    <ul className="list-disc pl-8 mb-6 space-y-2">
                        <li>{translations.p18_7}</li>
                        <li>{translations.p18_8}</li>
                        <li>{translations.p18_9}</li>
                    </ul>
                    <p className="mb-6">{translations.p18_10}</p>
                </div>

                <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-white">{translations.p18}</h2>
                <div className="mb-8 leading-relaxed text-gray-300">
                    <p className="mb-6">{translations.p19_1}</p>
                    <p className="mb-6">{translations.p19_2}</p>
                    <ul className="list-disc pl-8 mb-6 space-y-2">
                        <li>{translations.p19_3}</li>
                        <li>{translations.p19_4}</li>
                        <li>{translations.p19_5}</li>
                    </ul>
                    <p className="mb-6">{translations.p19_6}</p>
                </div>
            </div>
        </div>
    )
}

export default AMLPolicy