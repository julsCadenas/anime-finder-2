import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import useScrollOnDrag from 'react-scroll-ondrag';

const Carousel = ({ animeList, title }) => {
    const scrollRef = useRef(null);
    const navigate = useNavigate();;
    const { events } = useScrollOnDrag(scrollRef, {
        runScroll: ({ dx }) => {
            scrollRef.current.scrollLeft += dx * 1; 
        }
    });

    const handleDragStart = (e) => {
        e.preventDefault();
    };

    const animeClick = (id) => {
        navigate(`/anime/${id}`)
    }

    return (
        <section className="relative">
            <p className='text-neutral-50 font-Montserrat text-2xl font-bold mb-3'>{title}</p>
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
                {animeList.map(anime => (
                    <div key={anime.mal_id} className="min-w-max">
                        <img 
                            src={anime.images.jpg.large_image_url} 
                            alt={anime.title} 
                            className="w-48 h-72 object-cover rounded-md" 
                            onDragStart={handleDragStart}
                            onClick={()=>animeClick(anime.mal_id)}
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
