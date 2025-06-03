'use client'

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import JuneSummerPromoBanner from './promotions/JuneSummerPromoBanner';



function MainBanner({ translations, locale }) {
  const list = ['JuneSummerPromoBanner'];
  const [currentContent, setCurrentContent] = useState(list[0]); // Initial content
  const [currentContentIndex, setCurrentContentIndex] = useState(0); // Index of current content

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentContentIndex(prevIndex => {
        const newIndex = (prevIndex + 1) % list.length;
        setCurrentContent(list[newIndex]);
        return newIndex;
      });
    }, 7000); // Switch after 6 seconds

    return () => clearInterval(interval); // Cleanup
  }, []);

  const contentVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } },
  };

  return (
     <motion.div
       initial="hidden"
       animate="visible"
       className='z-50'
       exit="hidden"
       key={currentContent}
       variants={contentVariants}
     >
       {currentContent === 'JuneSummerPromoBanner' && <JuneSummerPromoBanner translations={translations} locale={locale} />}
    
     </motion.div>
  );
}

export default MainBanner;