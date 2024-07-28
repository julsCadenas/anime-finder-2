import { useState } from "react";

const Header = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };
    
    return (
        <header className="bg-black p-4">
            <nav className="font-Montserrat text-neutral-50 font-medium flex items-center justify-between mx-auto max-w-7xl px-4">
                <h1 className={`text-2xl cursor-pointer hover:text-gray-300 transition-colors ${isSidebarOpen ? '' : ''}`}>
                    Find Anime
                </h1>
                <button
                    className="block md:hidden text-neutral-50 focus:outline-none hover:text-gray-30 transition-all"
                    onClick={toggleSidebar}
                >
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                </button>
                <ul className={`hidden md:flex space-x-8 text-lg`}>
                    <li className="cursor-pointer hover:text-gray-300 transition-colors">
                        Home
                    </li>
                    <li className="cursor-pointer hover:text-gray-300 transition-colors">
                        Top Anime
                    </li>
                    <li className="cursor-pointer hover:text-gray-300 transition-colors">
                        Airing
                    </li>
                </ul>
                <div
                    className={`fixed top-0 left-0 w-full h-full bg-black transform ${
                        isSidebarOpen ? 'translate-y-0' : '-translate-y-full'
                    } transition-transform duration-150 ease-in-out md:hidden px-4`}
                >
                    <div className="flex justify-between items-center p-4">
                        <h1 className="text-2xl cursor-pointer hover:text-gray-300 transition-colors">
                            Find Anime
                        </h1>
                        <button onClick={toggleSidebar} className="text-neutral-50 focus:outline-none hover:text-gray-300 transition-colors">
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                            </svg>
                        </button>
                    </div>
                    <ul className="flex flex-col p-4 space-y-4 text-lg">
                        <li className="cursor-pointer hover:text-gray-300 transition-colors" onClick={toggleSidebar}>
                            Home
                        </li>
                        <li className="cursor-pointer hover:text-gray-300 transition-colors" onClick={toggleSidebar}>
                            Top Anime
                        </li>
                        <li className="cursor-pointer hover:text-gray-300 transition-colors" onClick={toggleSidebar}>
                            Airing
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
};

export default Header;
