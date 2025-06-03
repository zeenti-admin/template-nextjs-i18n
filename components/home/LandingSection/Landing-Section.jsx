import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { useState, useEffect } from "react"

function LandingSection({ locale, translations }) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const mainLang = locale?.split('-')[0] || 'en';

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const logoVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  // Fallback translations if not provided
  const defaultTranslations = {
    titleOne: "Start with",
    titleTwo: "digital excellence",
    description: "Consulting that helps you transform and thrive better, delivered as promised in as fast as a week.",
    cta: "Get Started",
    webDevelopment: "Web Development",
    mobileApps: "Mobile Apps",
    digitalStrategy: "Digital Strategy",
    cloudSolutions: "Cloud Solutions",
    projectsDelivered: "Projects Delivered",
    clientSatisfaction: "Client Satisfaction",
    supportAvailable: "Support Available"
  };

  const t = translations || defaultTranslations;

  return (
    <main className="min-h-screen bg-gray-50 flex flex-col">
      {/* Logo Section */}
      <motion.div 
        className="pt-24 pb-8 flex justify-start px-6 lg:px-12"
        initial="hidden"
        animate={isLoaded ? "visible" : "hidden"}
        variants={logoVariants}
      >
        <div className="flex items-center">
          <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center mr-3">
            <span className="text-white font-bold text-sm">Z</span>
          </div>
          <span className="text-xl font-semibold text-black">Zeenti</span>
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center px-6 lg:px-12">
        <motion.div
          className="max-w-6xl w-full"
          initial="hidden"
          animate={isLoaded ? "visible" : "hidden"}
          variants={containerVariants}
        >
          {/* Hero Text */}
          <div className="text-center mb-16">
            <motion.h1 
              className="text-5xl md:text-6xl lg:text-7xl font-light text-black leading-tight mb-6"
              variants={itemVariants}
            >
              {t.titleOne}
              <br />
              <span className="font-normal">{t.titleTwo}</span>
            </motion.h1>
            
            <motion.p 
              className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed mb-12"
              variants={itemVariants}
            >
              {t.description}
            </motion.p>

            <motion.div variants={itemVariants}>
              <Link 
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-black text-white rounded-full font-medium hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                {t.cta}
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </motion.div>
          </div>

          {/* Portfolio Cards */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-end"
            variants={containerVariants}
          >
            {/* Card 1 - Web Development */}
            <motion.div 
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2"
              variants={cardVariants}
              whileHover={{ scale: 1.02 }}
            >
              <div className="h-48 bg-gradient-to-br from-blue-50 to-blue-100 p-6 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-gray-800">{t.webDevelopment}</h3>
                </div>
              </div>
            </motion.div>

            {/* Card 2 - Mobile Apps */}
            <motion.div 
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 lg:translate-y-8"
              variants={cardVariants}
              whileHover={{ scale: 1.02 }}
            >
              <div className="h-56 bg-gradient-to-br from-green-50 to-green-100 p-6 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-gray-800">{t.mobileApps}</h3>
                </div>
              </div>
            </motion.div>

            {/* Card 3 - Digital Strategy (Center Circle) */}
            <motion.div 
              className="bg-black rounded-full w-32 h-32 mx-auto flex items-center justify-center shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-110"
              variants={cardVariants}
              whileHover={{ rotate: 5 }}
            >
              <div className="text-center">
                <h3 className="font-semibold text-white text-sm">{t.digitalStrategy?.split(' ')[0] || 'Digital'}</h3>
                <h3 className="font-semibold text-white text-sm">{t.digitalStrategy?.split(' ')[1] || 'Strategy'}</h3>
              </div>
            </motion.div>

            {/* Card 4 - Cloud Solutions */}
            <motion.div 
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2"
              variants={cardVariants}
              whileHover={{ scale: 1.02 }}
            >
              <div className="h-48 bg-gradient-to-br from-purple-50 to-purple-100 p-6 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-gray-800">{t.cloudSolutions}</h3>
                </div>
              </div>
            </motion.div>
          </motion.div>

]
        </motion.div>
      </div>
    </main>
  );
}

export default LandingSection;