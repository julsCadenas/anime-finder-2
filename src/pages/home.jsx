import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Home = () => {
    const [animeList, setAnimeList] = useState([]);

    useEffect(() => {
        axios.get('https://api.jikan.moe/v4/top/anime')
            .then(response => {
                setAnimeList(response.data.data);
            })
            .catch(e => {
                console.error('error:', e);
            });
    }, []);

    return (
        <div className="pl-11">
            <div className="flex overflow-hidden space-x-4 pt-16">
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

export default Home;
