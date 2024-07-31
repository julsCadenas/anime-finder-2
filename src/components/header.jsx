import { useState, useEffect } from "react";
import { Link, useNavigate } from 'react-router-dom';
import Search from "./search"; 

const Header = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(null);
    const navigate = useNavigate();

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    useEffect(() => {
        const handleKeyDown = (e) => {
          if (e.key === 'Escape') {
            if(isSearchOpen){
                toggleSearch()
            }
          }
        };
    
        window.addEventListener('keydown', handleKeyDown);
    
        return () => {
          window.removeEventListener('keydown', handleKeyDown);
        };
      }, [isSearchOpen]); 

    const toggleSearch = () => {
        setIsSearchOpen(!isSearchOpen);
    };

    return (
        <header className="fixed top-0 left-0 w-full bg-black bg-opacity-70 backdrop-filter backdrop-blur-lg p-3 z-50">
            <nav className="font-Montserrat text-neutral-50 font-medium flex items-center justify-between mx-auto max-w-7xl">
                <h1 className="text-3xl cursor-pointer hover:text-gray-300 transition-colors">
                    <Link to='/home'>Find Anime</Link>
                </h1>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-search md:invisible ml-auto mr-5 hover:text-gray-300 cursor-pointer"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    onClick={toggleSearch}
                >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <circle cx="10" cy="10" r="7" />
                    <line x1="16.6" y1="16.6" x2="21" y2="21" />
                </svg>
                <button
                    className="block md:hidden text-neutral-50 focus:outline-none hover:text-gray-300 transition-all"
                    onClick={toggleSidebar}
                >
                    <svg
                        className="w-8 h-8"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                </button>
                <ul className="hidden md:flex space-x-8 text-lg">
                    <li className="cursor-pointer hover:text-gray-300 transition-colors">
                        <Link to='/home'>Home</Link>
                    </li>
                    <li className="cursor-pointer hover:text-gray-300 transition-colors">
                        <Link to='/top'>Top Anime</Link>
                    </li>
                    <li className="cursor-pointer hover:text-gray-300 transition-colors">
                        <Link to='/airing'>Airing</Link>
                    </li>
                    <li className="cursor-pointer hover:text-gray-300 transition-colors">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="icon icon-tabler icon-tabler-search"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            strokeWidth="2"
                            stroke="currentColor"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            onClick={toggleSearch}
                        >
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <circle cx="10" cy="10" r="7" />
                            <line x1="16.6" y1="16.6" x2="21" y2="21" />
                        </svg>
                    </li>
                </ul>
                <div
                    className={`fixed top-0 right-0 h-screen w-full bg-black transform ${
                        isSidebarOpen ? 'translate-x-0' : 'translate-x-full'
                    } transition-transform duration-150 ease-in-out md:hidden`}
                >
                    <div className="flex flex-col h-full">
                        <div className="flex justify-between items-center p-3">
                            <h1 className="text-3xl cursor-pointer hover:text-gray-300 transition-colors">
                                Find Anime
                            </h1>
                            <button onClick={toggleSidebar} className="text-neutral-50 focus:outline-none hover:text-gray-300 transition-colors px-3">
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
                            <Link to='/home'>Home</Link>
                            </li>
                            <li className="cursor-pointer hover:text-gray-300 transition-colors" onClick={toggleSidebar}>
                            <Link to='/top'>Top Anime</Link>
                            </li>
                            <li className="cursor-pointer hover:text-gray-300 transition-colors" onClick={toggleSidebar}>
                            <Link to='/airing'>Airing</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            {isSearchOpen && <Search />}
        </header>
    );
};

export default Header;
