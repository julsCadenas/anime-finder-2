import React, { useRef } from 'react';

const Trailers = ({ animeList }) => {

    return (
        <div className="relative">
            <div
                className="flex overflow-x-scroll space-x-4 pt-16"
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
        </div>
    );
};

export default Trailers;
