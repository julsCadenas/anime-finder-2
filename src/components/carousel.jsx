import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useScrollOnDrag from 'react-scroll-ondrag';

const Carousel = ({ animeList, title, nav, shuffle }) => {
    const [isDragging, setIsDragging] = useState(false);
    const [shuffleAnime, setShuffleAnime] = useState([]);
    const scrollRef = useRef(null);
    const navigate = useNavigate();
    const { events } = useScrollOnDrag(scrollRef, {
        runScroll: ({ dx }) => {
            scrollRef.current.scrollLeft += dx * 1; 
        },
        onDragStart: () => setIsDragging(true),
        onDragEnd: () => setIsDragging(false)
    });

    const handleDragStart = (e) => {
        e.preventDefault();
    };

    const animeClick = (id) => {
        navigate(`/anime/${id}`);
    };

    const handleTitleClick = () => {
        navigate(nav); 
    };

    const shuffleArray = (array) => {
        let shuffledArray = [...array];
        for (let i = shuffledArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
        }
        return shuffledArray;
    };

    useEffect(() => {
        if (animeList && animeList.length > 0) {
            if (shuffle) {
                setShuffleAnime(shuffleArray(animeList));
            } else {
                setShuffleAnime(animeList);
            }
        }
    }, [animeList, shuffle]);

    return (
        <section className="relative">
            <div className='flex items-center mb-3 group'>
                <p
                    data-tooltip-target="tooltip-animation"
                    className='text-neutral-50 font-Montserrat text-2xl font-bold cursor-pointer group-hover:text-gray-300'
                    title='See All'
                    onClick={handleTitleClick} 
                >
                    {title}
                </p>
                <span className='ml-2 group-hover:ml-4 transition-all cursor-pointer' title='See All' onClick={handleTitleClick}>
                    <svg className="w-5 h-5 group-hover:text-gray-300 text-neutral-50" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 8 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1"/>
                    </svg>
                </span>
            </div>
            <div
                ref={scrollRef}
                className="flex space-x-3"
                style={{ 
                    scrollBehavior: 'auto', 
                    willChange: 'transform',
                    overflowX: 'scroll',
                    WebkitOverflowScrolling: 'touch',
                    scrollbarWidth: 'none',
                    msOverflowStyle: 'none'
                }}
                {...events}
            >
                {shuffleAnime.map(anime => (
                    <div key={anime.mal_id} className="min-w-max cursor-pointer">
                        <img 
                            src={anime.images.jpg.large_image_url} 
                            alt={anime.title} 
                            className={`w-48 h-72 object-cover rounded-md transition-all ${isDragging ? 'pointer-events-none' : ''}`} 
                            onDragStart={handleDragStart}
                            title={anime.title}
                            onClick={() => !isDragging && animeClick(anime.mal_id)}
                        />
                    </div>
                ))}
            </div>
            <style>{`
                .relative > div::-webkit-scrollbar {
                    display: none;
                }
            `}</style>
        </section>
    );
};

export default Carousel;
