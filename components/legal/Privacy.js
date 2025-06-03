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
        t1_1,
        t1_2,
        p1,
        t2,
        p2,
        t3,
        p3,
        t4,
        p4,
        t5,
        p5,
        t6,
        p6,
        t7,
        p7,
        t8,
        p8,
        t9,
        p9,
        t10,
        p10,
        t11,
        p11,
        t12,
        p12,
        t13,
        p13,
        t14,
        p14,
        t15,
        p15,
        t16,
        p16,
        t17,
        p17
    } = translations

    return (
        <div style={bgImageStyle} className='flex flex-col'>
            <div className="mx-10 py-20 mb:py-32 mb:-mb-20">
                <h1 className="text-center text-4xl mb:text-center mb:text-6xl font-light text-white">{t1_1} <span className="bg-gradient-to-r from-ttblue py-1 to-ttelectricBlue inline-block text-transparent bg-clip-text">{t1_2}</span>
                </h1>
                <p className="mt-8 text-base px-0 mb:px-24 text-left text-slate-300">{p1}</p>

                {/* Collection of your Personal Information */}
                <div className="py-6">
                    <span className="mt-8 text-center text-2xl px-0 mb:px-24 mb:text-left mb:text-4xl font-semibold text-slate-300">
                        {t2}
                    </span>
                    <p className="mt-4 text-base px-0 mb:px-24 text-left text-slate-300">
                        {p2}
                    </p>
                </div>

                {/* Use of your Personal Information */}
                <div className="py-6">
                    <span className="mt-8 text-center text-2xl px-0 mb:px-24 mb:text-left mb:text-4xl font-semibold text-slate-300">
                        {t3}
                    </span>
                    <p className="mt-4 text-base px-0 mb:px-24 text-left text-slate-300">
                        {p3}
                    </p>
                </div>

                {/* Sharing Information with Third Parties */}
                <div className="py-6">
                    <span className="mt-8 text-center text-2xl px-0 mb:px-24 mb:text-left mb:text-4xl font-semibold text-slate-300">
                        {t4}
                    </span>
                    <p className="mt-4 text-base px-0 mb:px-24 text-left text-slate-300">
                        {p4}
                    </p>
                </div>

                {/* Opt-Out of Sale or Disclosure of Personal Information to Third Parties */}
                <div className="py-6">
                    <span className="mt-8 text-center text-2xl px-0 mb:px-24 mb:text-left mb:text-4xl font-semibold text-slate-300">
                        {t5}
                    </span>
                    <p className="mt-4 text-base px-0 mb:px-24 text-left text-slate-300">
                        {p5}
                    </p>
                </div>

                {/* Tracking User Behavior */}
                <div className="py-6">
                    <span className="mt-8 text-center text-2xl px-0 mb:px-24 mb:text-left mb:text-4xl font-semibold text-slate-300">
                        {t6}
                    </span>
                    <p className="mt-4 text-base px-0 mb:px-24 text-left text-slate-300">
                        {p6}
                    </p>
                </div>

                {/* Automatically Collected Information */}
                <div className="py-6">
                    <span className="mt-8 text-center text-2xl px-0 mb:px-24 mb:text-left mb:text-4xl font-semibold text-slate-300">
                        {t7}
                    </span>
                    <p className="mt-4 text-base px-0 mb:px-24 text-left text-slate-300">
                        {p7}
                    </p>
                </div>

                {/* Use of Cookies */}
                <div className="py-6">
                    <span className="mt-8 text-center text-2xl px-0 mb:px-24 mb:text-left mb:text-4xl font-semibold text-slate-300">
                        {t8}
                    </span>
                    <p className="mt-4 text-base px-0 mb:px-24 text-left text-slate-300">
                        {p8}
                    </p>
                </div>

                {/* Security of your Personal Information */}
                <div className="py-6">
                    <span className="mt-8 text-center text-2xl px-0 mb:px-24 mb:text-left mb:text-4xl font-semibold text-slate-300">
                        {t9}
                    </span>
                    <p className="mt-4 text-base px-0 mb:px-24 text-left text-slate-300">
                        {p9}
                    </p>
                </div>

                {/* Right to Deletion */}
                <div className="py-6">
                    <span className="mt-8 text-center text-2xl px-0 mb:px-24 mb:text-left mb:text-4xl font-semibold text-slate-300">
                        {t10}
                    </span>
                    <p className="mt-4 text-base px-0 mb:px-24 text-left text-slate-300">
                        {p10}
                    </p>
                </div>
                {/* Children Under Thirteen */}
                <div className="py-6">
                    <span className="mt-8 text-center text-2xl px-0 mb:px-24 mb:text-left mb:text-4xl font-semibold text-slate-300">
                        {t11}
                    </span>
                    <p className="mt-4 text-base px-0 mb:px-24 text-left text-slate-300">
                        {p11}
                    </p>
                </div>

                {/* Opt-Out & Unsubscribe from Third Party Communications */}
                <div className="py-6">
                    <span className="mt-8 text-center text-2xl px-0 mb:px-24 mb:text-left mb:text-4xl font-semibold text-slate-300">
                        {t12}
                    </span>
                    <p className="mt-4 text-base px-0 mb:px-24 text-left text-slate-300">
                        {p12}
                    </p>
                </div>

                {/* E-mail Communications */}
                <div className="py-6">
                    <span className="mt-8 text-center text-2xl px-0 mb:px-24 mb:text-left mb:text-4xl font-semibold text-slate-300">
                        {t13}
                    </span>
                    <p className="mt-4 text-base px-0 mb:px-24 text-left text-slate-300">
                        {p13}
                    </p>
                </div>

                {/* SMS Messaging Communications */}
                <div className="py-6">
                    <span className="mt-8 text-center text-2xl px-0 mb:px-24 mb:text-left mb:text-4xl font-semibold text-slate-300">
                        {t14}
                    </span>
                    <p className="mt-4 text-base px-0 mb:px-24 text-left text-slate-300">
                        {p14}
                    </p>
                </div>

                {/* External Data Storage */}
                <div className="py-6">
                    <span className="mt-8 text-center text-2xl px-0 mb:px-24 mb:text-left mb:text-4xl font-semibold text-slate-300">
                        {t15}
                    </span>
                    <p className="mt-4 text-base px-0 mb:px-24 text-left text-slate-300">
                        {p15}
                    </p>
                </div>

                {/* Changes to this Statement */}
                <div className="py-6">
                    <span className="mt-8 text-center text-2xl px-0 mb:px-24 mb:text-left mb:text-4xl font-semibold text-slate-300">
                        {t16}
                    </span>
                    <p className="mt-4 text-base px-0 mb:px-24 text-left text-slate-300">
                        {p16}
                    </p>
                </div>

                {/* Contact Information */}
                <div className="py-6">
                    <span className="mt-8 text-center text-2xl px-0 mb:px-24 mb:text-left mb:text-4xl font-semibold text-slate-300">
                        {t17}
                    </span>
                    <p className="mt-4 text-base px-0 mb:px-24 text-left text-slate-300">
                        {p17}
                    </p>
                </div>

            </div>

        </div>
    );
}

export default Team;
