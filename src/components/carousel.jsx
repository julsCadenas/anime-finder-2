import React, { useRef } from 'react';
import useScrollOnDrag from 'react-scroll-ondrag';

const Carousel = ({ animeList }) => {
    const scrollRef = useRef(null);
    const { events } = useScrollOnDrag(scrollRef, {
        runScroll: ({ dx }) => {
            scrollRef.current.scrollLeft += dx * 1; 
        }
    });

    const handleDragStart = (e) => {
        e.preventDefault();
    };

    return (
        <div className="relative">
            <div
                ref={scrollRef}
                className="flex space-x-4 pt-16"
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
                {animeList.map(anime => (
                    <div key={anime.mal_id} className="min-w-max">
                        <img 
                            src={anime.images.jpg.image_url} 
                            alt={anime.title} 
                            className="w-48 h-72 object-cover rounded-md" 
                            onDragStart={handleDragStart}
                        />
                    </div>
                ))}
            </div>
            {/* Custom CSS to hide scrollbar for Webkit browsers (Chrome, Safari) */}
            <style jsx>{`
                .relative > div::-webkit-scrollbar {
                    display: none;
                }
            `}</style>
        </div>
    );
};

export default Carousel;
