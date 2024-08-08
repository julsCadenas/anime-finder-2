import React from 'react';

const ScrollToTop = () => {
    const handleScrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <button 
            onClick={handleScrollToTop} 
            className="fixed bottom-4 right-4 md:bottom-6 md:right-6 bg-transparent text-neutral-50 hover:text-gray-300 p-3 shadow-lg"
            aria-label="Scroll to top"
        >
            <svg className="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 8">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7 7.674 1.3a.91.91 0 0 0-1.348 0L1 7"/>
            </svg>
        </button>
    );
};

export default ScrollToTop;
