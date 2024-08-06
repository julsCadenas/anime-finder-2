import fetchAnime from "../../modules/fetchanime";
import React, { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import useScrollOnDrag from 'react-scroll-ondrag';
import Loading from "../loading";

const Recommendations = ({ id }) => {
    const [anime, setAnime] = useState([]);
    const [isDragging, setIsDragging] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const scrollRef = useRef(null);
    const navigate = useNavigate();
    const link = `https://api.jikan.moe/v4/anime/${id}/recommendations`;
    const { events } = useScrollOnDrag(scrollRef, {
        runScroll: ({ dx }) => {
            scrollRef.current.scrollLeft += dx * 1; 
        },
        onDragStart: () => setIsDragging(true),
        onDragEnd: () => setIsDragging(false)
    });

    useEffect(() => {
        fetchAnime(link, (data) => {
            setAnime(data);
            setIsLoading(false);
        });
    }, [id]);

    const handleDragStart = (e) => {
        e.preventDefault();
    };

    const animeClick = (id) => {
        navigate(`/anime/${id}`);
    };

    return (
        <section className="relative max-w-80 md:max-w-full">
            <div
                ref={scrollRef}
                className="flex space-x-2"
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
                {anime.map(anime => (
                    <div key={anime.entry.mal_id} className="min-w-max cursor-pointer">
                        <img 
                            src={anime.entry.images.jpg.large_image_url} 
                            alt={anime.title} 
                            className={`w-48 h-72 object-cover rounded-md transition-all ${isDragging ? 'pointer-events-none' : ''}`} 
                            onDragStart={handleDragStart}
                            title={anime.title}
                            onClick={() => !isDragging && animeClick(anime.entry.mal_id)}
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
    )
}

export default Recommendations;
