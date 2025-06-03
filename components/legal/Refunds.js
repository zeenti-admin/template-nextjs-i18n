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
    } = translations

    return (
        <div style={bgImageStyle} className='flex flex-col'>
            <div className="mx-10 py-20 mb:pt-24 mb:-mb-16">
                <h1 className="text-center text-4xl mb:text-center mb:text-6xl font-light text-white">{t1_1} <span className="bg-gradient-to-r from-ttblue py-1 to-ttelectricBlue inline-block text-transparent bg-clip-text">{t1_2}</span>
                </h1>
                {/* Refunds after successful completion of the Challenge */}
                <div className="pt-16">
                    <span className="mt-8 text-center text-2xl px-0 mb:px-24 mb:text-left mb:text-3xl font-medium text-slate-300">
                        {t2}
                    </span>
                    <p className="mt-4 text-base px-0 mb:px-24 text-left text-slate-300">
                        {p1}
                    </p>
                </div>

                {/* Refund Policy Post */}
                <div className="py-6">
                    <span className="mt-8 text-center text-2xl px-0 mb:px-24 mb:text-left mb:text-3xl font-medium text-slate-300">
                        {t3}
                    </span>
                    <p className="mt-4 text-base px-0 mb:px-24 text-left text-slate-300">
                        {p2}
                    </p>
                </div>

                {/* Acceptance of this Policy */}
                <div className="py-6">
                    <span className="mt-8 text-center text-2xl px-0 mb:px-24 mb:text-left mb:text-3xl font-medium text-slate-300">
                        {t4}
                    </span>
                    <p className="mt-4 text-base px-0 mb:px-24 text-left text-slate-300">
                        {p3}
                    </p>
                </div>

                {/* Dispute Policy */}
                <div className="py-6">
                    <span className="mt-8 text-center text-2xl px-0 mb:px-24 mb:text-left mb:text-3xl font-medium text-slate-300">
                        {t5}
                    </span>
                    <p className="mt-4 text-base px-0 mb:px-24 text-left text-slate-300">
                        {p4}
                    </p>
                </div>

                {/* Failed Transaction Policy */}
                <div className="py-6">
                    <span className="mt-8 text-center text-2xl px-0 mb:px-24 mb:text-left mb:text-3xl font-medium text-slate-300">
                        {t6}
                    </span>
                    <p className="mt-4 text-base px-0 mb:px-24 text-left text-slate-300">
                        {p5}
                    </p>
                </div>
            </div>

        </div>
    );
}

export default Team;
