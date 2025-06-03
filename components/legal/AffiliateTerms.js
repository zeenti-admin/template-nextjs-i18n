'use client'

//translations added

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



function Team({ translations }) {

    const {
        h1_1, h1_2, t1, t2, t3, t4, t5, t6, t7, t8, t9, t10, t11, t12, t13, t14, t15, t16, t17, t18, t19, t20, t21, p1_1, p1_2, p2_1, p2_2, p3_1, p3_2, p4_1, p4_2, p4_3, p4_4, p4_5, p4_6, p4_7, p4_8, p4_9, p4_10,
        p4_11,
        p4_12,
        p4_13,
        p4_14,
        p4_15,
        p4_16,
        p4_17,
        p4_18,
        p4_19,
        p4_20,
        p5_1, p5_2, p5_3, p6_1, p6_2, p6_3, p6_4, p6_5, p6_6, p7_1, p7_2, p7_3, p7_4, p8_1, p8_2, p8_3, p8_4, p8_5, p8_6, p8_7, p8_8, p9_1, p9_2, p9_3, p9_4, p9_5, p9_6, p9_7, p10_1,
        p10_2,
        p10_3,
        p10_4,
        p10_5,
        p10_6,
        p11_1,
        p11_2,
        p11_3,
        p11_4,
        p11_5,
        p11_6,
        p11_7,
        p12_1,
        p12_2,
        p12_3,
        p12_4,
        p12_5,
        p12_6,
        p12_7,
        p12_8,
        p12_9,
        p12_10,
        p12_11,
        p12_12,
        p12_13,
        p13_1,
        p13_2,
        p13_3,
        p13_4,
        p13_5,
        p13_6,
        p13_7,
        p14_1,
        p14_2,
        p14_3,
        p14_4,
        p14_5,
        p14_6,
        p14_7,
        p15_1,
        p15_2,
        p15_3,
        p15_4,
        p15_5,
        p15_6,
        p15_7,
        p15_8,
        p15_9,
        p15_10,
        p16_1,
        p16_2,
        p16_3,
        p16_4,
        p16_5,
        p16_6,
        p16_7,
        p16_8,
        p16_9,
        p17_1,
        p17_2,
        p17_3,
        p17_4,
        p17_5,
        p17_6,
        p17_7,
        p17_8,
        p17_9,
        p18_1,
        p18_2,
        p18_3,
        p18_4,
        p19_1,
        p19_2,
        p19_3,
    } = translations

    return (
        <div style={bgImageStyle} className='flex flex-col text-slate-300 px-4 mb:px-32 py-20 mb:py-32 mb:-mb-20 gap-6'>
            <h1 className="text-center text-4xl mb:text-center mb:text-6xl font-light text-white">{h1_1} <span className="">{h1_2}</span>
            </h1>

            <article className="mt-12">
                <h2 className="text-white font-semibold text-xl md:text-3xl">{t1}</h2> <br/>
                <strong className="text-white">{t2}</strong> <br/> <br/>
                <p>{p1_1}</p> <br/>
                <p>{p1_2}</p> <br/>

                <strong className="text-white">{t3}</strong> <br/> <br/>
                <p>{p2_1}</p> <br/>
                <p>{p2_2}</p> <br/>

                <strong className="text-white">{t4}</strong> <br/> <br/>
                <p>{p3_1}</p> <br/>
                <p>{p3_2}</p> <br/>

                <h2 className="text-white font-semibold text-xl md:text-3xl">{t5}</h2> <br/>
                <p>{p4_1}</p> <br/>
                <strong className="text-white">{p4_2}</strong> <br/> <br/>
                <p>{p4_3}</p> <br/>
                <strong className="text-white">{p4_4}</strong> <br/> <br/>
                <p>{p4_5}</p> <br/>
                <strong className="text-white">{p4_6}</strong> <br/> <br/>
                <p>{p4_7}</p> <br/>
                <strong className="text-white">{p4_8}</strong> <br/> <br/>
                <p>{p4_9}</p> <br/>
                <strong className="text-white">{p4_10}</strong> <br/> <br/>
                <p>{p4_11}</p> <br/>
                <strong className="text-white">{p4_12}</strong> <br/> <br/>
                <p>{p4_13}</p> <br/>
                <strong className="text-white">{p4_14}</strong> <br/> <br/>
                <p>{p4_15}</p> <br/>
                <strong className="text-white">{p4_16}</strong> <br/> <br/>
                <p>{p4_17}</p> <br/>
                <strong className="text-white">{p4_18}</strong> <br/> <br/>
                <p>{p4_19}</p> <br/>

                <h2 className="text-white font-semibold text-xl md:text-3xl">{t6}</h2> <br/>
                <strong className="text-white">{t7}</strong> <br/> <br/>
                <p>{p5_1}</p> <br/>
                <p>{p5_2}</p> <br/>
                <p>{p5_3}</p> <br/>
                <strong className="text-white">{t8}</strong> <br/> <br/>
                <p>{p6_1}</p> <br/>
                <p>{p6_2}</p> <br/>
                <ul className="flex flex-col pl-6 gap-6 list-disc">
                    <li>{p6_3}</li>
                    <li>{p6_4}</li>
                    <li>{p6_5}</li>
                </ul> <br/>
                <p>{p6_6}</p> <br/>
                <strong className="text-white">{t9}</strong> <br/> <br/>
                <p>{p7_1}</p> <br/>
                <p>{p7_2}</p> <br/>
                <p>{p7_3}</p> <br/>
                <p>{p7_4}</p> <br/>

                <h2 className="text-white font-semibold text-xl md:text-3xl">{t10}</h2> <br/>
                <strong className="text-white">{p8_1}</strong> <br/> <br/>
                <p>{p8_2}</p> <br/>
                <strong className="text-white">{p8_3}</strong> <br/> <br/>
                <p>{p8_4}</p> <br/>
                <strong className="text-white">{p8_5}</strong> <br/> <br/>
                <p>{p8_6}</p> <br/>
                <strong className="text-white">{p8_7}</strong> <br/> <br/>
                <p>{p8_8}</p> <br/>

                <h2 className="text-white font-semibold text-xl md:text-3xl">{t11}</h2> <br/>
                <strong className="text-white">{p9_1}</strong> <br/> <br/>
                <p>{p9_2}</p> <br/>
                <p>{p9_3}</p> <br/>
                <p>{p9_4}</p> <br/>

                {/* AQUI VA LA TABLA */}

                <ul className="flex flex-col pl-6 gap-6 list-disc">
                    <li>{p9_5}</li>
                    <li>{p9_6}</li>
                    <li>{p9_7}</li>
                </ul> <br/>

                <strong className="text-white">{t12}</strong> <br/> <br/>
                <p>{p10_1}</p> <br/>
                <ul className="flex flex-col pl-6 gap-6 list-disc">
                    <li>{p10_2}</li>
                    <li>{p10_3}</li>
                    <li>{p10_4}</li>
                    <li>{p10_5}</li>
                    <li>{p10_6}</li>
                </ul> <br/>

                <strong className="text-white">{t13}</strong> <br/> <br/>
                <p>{p11_1}</p> <br/>
                <ul className="flex flex-col pl-6 gap-6 list-disc">
                    <li>{p11_2}</li>
                    <li>{p11_3}</li>
                    <li>{p11_4}</li>
                    <li>{p11_5}</li>
                    <li>{p11_6}</li>
                </ul> <br/>
                <p>{p11_7}</p> <br/>

                <h2 className="text-white font-semibold text-xl md:text-3xl">{t14}</h2> <br/>
                <p>{p12_1}</p> <br/>
                <p>{p12_2}</p> <br/>
                <p>{p12_3}</p> <br/>
                <p>{p12_4}</p> <br/>
                <p>{p12_5}</p> <br/>
                <p>{p12_6}</p> <br/>
                <p>{p12_7}</p> <br/>
                <p>{p12_8}</p> <br/>
                <p>{p12_9}</p> <br/>
                <p>{p12_10}</p> <br/>
                <p>{p12_11}</p> <br/>
                <p>{p12_12}</p> <br/>
                <p>{p12_13}</p> <br/>

                <h2 className="text-white font-semibold text-xl md:text-3xl">{t15}</h2> <br/>
                <p>{p13_1}</p> <br/>
                <strong className="text-white">{p13_2}</strong> <br/> <br/>
                <p>{p13_3}</p> <br/>
                <p>{p13_4}</p> <br/>
                <p>{p13_5}</p> <br/>
                <p>{p13_6}</p> <br/>
                <p>{p13_7}</p> <br/>
                <strong className="text-white">{t16}</strong> <br/> <br/>
                <p>{p14_1}</p> <br/>
                <p>{p14_2}</p> <br/>
                <p>{p14_3}</p> <br/>
                <strong className="text-white">{p14_4}</strong> <br/> <br/>
                <p>{p14_5}</p> <br/>
                <p>{p14_6}</p> <br/>
                <p>{p14_7}</p> <br/>

                <h2 className="text-white font-semibold text-xl md:text-3xl">{t17}</h2> <br/>
                <strong className="text-white">{p15_1}</strong> <br/> <br/>
                <p>{p15_2}</p> <br/>
                <strong className="text-white">{p15_3}</strong> <br/> <br/>
                <p>{p15_4}</p> <br/>
                <strong className="text-white">{p15_5}</strong> <br/> <br/>
                <p>{p15_6}</p> <br/>
                <strong className="text-white">{p15_7}</strong> <br/> <br/>
                <p>{p15_8}</p> <br/>
                <strong className="text-white">{p15_9}</strong> <br/> <br/>
                <p>{p15_10}</p> <br/>

                <h2 className="text-white font-semibold text-xl md:text-3xl">{t18}</h2> <br/>
                <strong className="text-white">{p16_1}</strong> <br/> <br/>
                <ul className="flex flex-col pl-6 gap-6 list-disc">
                    <li>{p16_2}</li>
                    <li>{p16_3}</li>
                </ul> <br/>
                <strong className="text-white">{p16_4}</strong> <br/> <br/>
                <ul className="flex flex-col pl-6 gap-6 list-disc">
                    <li>{p16_5}</li>
                    <li>{p16_6}</li>
                </ul> <br/>
                <strong className="text-white">{p16_7}</strong> <br/> <br/>
                <ul className="flex flex-col pl-6 gap-6 list-disc">
                    <li>{p16_8}</li>
                    <li>{p16_9}</li>
                </ul> <br/>

                <h2 className="text-white font-semibold text-xl md:text-3xl">{t19}</h2> <br/>
                <p>{p17_1}</p> <br/>
                <p>{p17_2}</p> <br/>
                <p>{p17_3}</p> <br/>
                <p>{p17_4}</p> <br/>
                <ul className="flex flex-col pl-6 gap-6 list-disc">
                    <li>{p17_5}</li>
                    <li>{p17_6}</li>
                    <li>{p17_7}</li>
                    <li>{p17_8}</li>
                </ul> <br/>
                <p>{p17_9}</p> <br/>

                <h2 className="text-white font-semibold text-xl md:text-3xl">{t20}</h2> <br/>
                <p>{p18_1}</p> <br/>
                <p>{p18_2}</p> <br/>
                <p>{p18_3}</p> <br/>
                <p>{p18_4}</p> <br/>


                <h2 className="text-white font-semibold text-xl md:text-3xl">{t21}</h2> <br/>
                <p>{p19_1}</p> <br/>
                <p>{p19_2}</p> <br/>
                <p>{p19_3}</p> <br/>

            </article>
        </div>
    );
}

export default Team;
