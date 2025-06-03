'use client'
import { app } from '@/firebase/not-found/app'
import { getFirestore, collection, addDoc } from 'firebase/firestore'
import React, { useState } from 'react';

const returnedMetadata = {
    title: "404 Not Found - TopTier Trader",
    description: "Join TopTier Trader, the leading proprietary trading evaluation firm. We're looking for skilled traders to fund. Start your trading journey and unlock new opportunities today!",
    keywords: "proprietary trading, get funded, trading evaluation, experienced traders, trading journey, financial markets, trading opportunities",
    language: "en",
    subject: "Proprietary Trading Firm Services",
    coverage: "Global",
    robots: "index, follow",
    author: "TopTier Trader",
    publisher: "TopTier Trader LLC",
    og: {
        type: "website",
        title: "Join TopTier Trader - Exclusive Proprietary Trading Firm",
        description: "Seeking skilled traders for funding at TopTier Trader. Start your proprietary trading journey with us and explore unlimited financial markets opportunities.",

        site_name: "TopTier Trader",
        url: "https://www.toptiertrader.com/en/"
    },
    alternates: {
        canonical: "https://www.toptiertrader.com/en",
        languages: {
            'en': '/en',
            'es': '/es'
        },

    }
}

export async function generateMetadata({ params: { locale } }) {
    const metadata = returnedMetadata
    return metadata
}

// Initialize Firestore
const db = getFirestore(app);

const Form = () => {
    const [reason, setReason] = useState('');
    const [explanation, setExplanation] = useState('');
    const [message, setMessage] = useState('');

    const handleReasonClick = (selectedReason) => {
        setReason(selectedReason);
        setExplanation('');
    };

    const handleExplanationChange = (event) => {
        setExplanation(event.target.value);
    };

    const handleSubmit = async () => {
        try {
            await addDoc(collection(db, 'user_feedback'), {
                reason,
                explanation,
                timestamp: new Date()
            });
            setMessage('Thank you for helping us improve. Explore our website by clicking the button below!');
        } catch (error) {
            setMessage(`Error: ${error.message}`);
        }
    };

    return (
        <div className='flex flex-col pt-5 mx-8 mb:mx-0'>
            <div className='flex flex-col mb:flex-row mb:space-x-4 text-base'>
                <button
                    className={`reason-button ${reason === 'ad' ? 'bg-white py-2 px-4 rounded-lg border-2 border-ttblue' : 'bg-white py-2 px-4 rounded-lg border-2'}`}
                    onClick={() => handleReasonClick('ad')}
                >
                    Ad link
                </button>
                <button
                    className={`reason-button ${reason === 'email' ? 'bg-white py-2 px-4 rounded-lg border-2 border-ttblue' : 'bg-white py-2 px-4 rounded-lg border-2'}`}
                    onClick={() => handleReasonClick('email')}
                >
                    Email link
                </button>
                <button
                    className={`reason-button ${reason === 'social_media' ? 'bg-white py-2 px-4 rounded-lg border-2 border-ttblue' : 'bg-white py-2 px-4 rounded-lg border-2'}`}
                    onClick={() => handleReasonClick('social_media')}
                >
                    Social media link
                </button>
                <button
                    className={`reason-button ${reason === 'affiliate' ? 'bg-white py-2 px-4 rounded-lg border-2 border-ttblue' : 'bg-white py-2 px-4 rounded-lg border-2'}`}
                    onClick={() => handleReasonClick('affiliate')}
                >
                    Affiliate link
                </button>
            </div>

            {reason && (
                <div className='flex flex-col my-5 '>
                    <label htmlFor='explanation'>Would you mind giving us more details?</label>
                    <input
                        type='text'
                        id='explanation'
                        value={explanation}
                        placeholder='Which ad link? What email? etc.'
                        className='mt-5 h-fit-content p-2 border-2 border-gray-300 rounded-lg w-full'
                        onChange={handleExplanationChange}
                    />
                    <button onClick={handleSubmit} className='text-white w-fit mt-5 px-8 cursor-pointer hover: py-2 transition-all hover:bg-orange-600 hover:scale-110 rounded-xl bg-ttorange font-bold'>Submit</button>
                </div>
            )}

            {message && (
                <div className={`mt-5 p-4 rounded-lg ${message.startsWith('Error') ? 'bg-red-500 text-white' : 'bg-green-500 text-white'}`}>
                    {message}
                </div>
            )}
        </div>
    );
};

export default Form;
