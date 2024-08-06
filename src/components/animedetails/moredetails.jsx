import React, { useState } from 'react';
import Previews from './previews';
import Episodes from './eps';
import Characters from './characters';
import Staff from './staff';
import Reviews from './reviews';
import Recommendations from './recos';

const MoreDetails = ({ id }) => {
    const [activeTab, setActiveTab] = useState('Previews');
    const [isDropdownOpen, setDropdownOpen] = useState(false);
    const tabs = ['Previews', 'Episodes', 'Characters', 'Staff', 'Reviews', 'Recommendations'];

    const renderTabs = () => {
        switch (activeTab) {
            case 'Previews':
                return <Previews id={id} />;
            case 'Episodes':
                return <Episodes id={id} />;
            case 'Characters':
                return <Characters id={id} />;
            case 'Staff':
                return <Staff id={id} />;
            case 'Reviews':
                return <Reviews id={id} />;
            case 'Recommendations':
                return <Recommendations id={id} />;
            default:
                return null;
        }
    };

    const handleDropdownToggle = () => {
        setDropdownOpen(!isDropdownOpen);
    };

    const handleTabClick = (tab) => {
        setActiveTab(tab);
        setDropdownOpen(false); 
    };

    return (
        <main className="font-Montserrat bg-black">
            {/* Mobile Dropdown */}
            <div className="md:hidden">
                <button
                    onClick={handleDropdownToggle}
                    className="text-neutral-50 bg-black focus:ring-4 focus:outline-none font-medium px-5 py-2.5 text-center inline-flex items-center border-b-2"
                >
                    {activeTab}
                    <svg
                        className="w-2.5 h-2.5 ml-2"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 10 6"
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="m1 1 4 4 4-4"
                        />
                    </svg>
                </button>
                {isDropdownOpen && (
                    <div className="absolute bg-black z-10 bg-opacity-60 backdrop-blur-md w-full md:w-48">
                        <ul className="py-2">
                            {tabs.map((tab) => (
                                <li key={tab}>
                                    <button
                                        onClick={() => handleTabClick(tab)}
                                        className="block w-full text-left px-4 py-2 text-base text-neutral-50 hover:bg-gray-500"
                                    >
                                        {tab}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
            {/* Desktop Tabs */}
            <div className="hidden md:block text-sm font-medium text-center border-b text-gray-400 border-gray-700">
                <ul className="flex flex-wrap -mb-px w-full">
                    {tabs.map((tab) => (
                        <li key={tab} className="flex-1">
                            <button
                                onClick={() => setActiveTab(tab)}
                                className={`w-full inline-block p-4 border-b-2 rounded-t-lg text-xs md:text-base ${
                                    activeTab === tab
                                        ? 'text-neutral-50 border-neutral-50'
                                        : 'border-transparent hover:text-gray-600 hover:border-gray-300'
                                }`}
                            >
                                {tab}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="text-neutral-50 mt-4">{renderTabs()}</div>
        </main>
    );
};

export default MoreDetails;
