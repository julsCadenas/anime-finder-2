import React, { useRef } from 'react';

const Carousel = ({ animeList }) => {
    const scrollRef = useRef(null);

    const scrollLeft = () => {
        scrollRef.current.scrollBy({
            left: -300, 
            behavior: 'smooth'
        });
    };

    const scrollRight = () => {
        scrollRef.current.scrollBy({
            left: 300, 
            behavior: 'smooth'
        });
    };

    return (
        <div className="relative">
            <div
                ref={scrollRef}
                className="flex overflow-x-hidden space-x-4 pt-16"
                style={{ scrollBehavior: 'smooth' }}
            >
                {animeList.map(anime => (
                    <div key={anime.mal_id} className="min-w-max">
                        <img 
                            src={anime.images.jpg.image_url} 
                            alt={anime.title} 
                            className="w-48 h-72 object-cover rounded-md" 
                        />
                    </div>
                ))}
            </div>
            <button
                onClick={() => scrollLeft(scrollRef)}
                className="absolute top-16 h-72 bg-black bg-opacity-50 p-2 flex items-center justify-center hover:bg-opacity-75 focus:outline-none rounded-l text-gray-100"
            >
                &#10094;
            </button>
            <button
                onClick={() => scrollRight(scrollRef)}
                className="absolute right-0 top-16 h-72 bg-black bg-opacity-50 p-2 flex items-center justify-center hover:bg-opacity-75 focus:outline-none rounded-l text-gray-100"
            >
                &#10095;
            </button>
        </div>
    );
};

export default Carousel;
