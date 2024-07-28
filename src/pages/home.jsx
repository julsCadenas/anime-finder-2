import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Carousel from '../components/carousel';
import Trailers from '../components/trailers';

const Home = () => {
    const [animeList, setAnimeList] = useState([]);
    const [animeLatest, setAnimeLatest] = useState([]);

    useEffect(() => {
        const fetchTopAnime = async (retryCount = 0) => {
            try {
                const response = await axios.get('https://api.jikan.moe/v4/top/anime');
                setAnimeList(response.data.data);
            } catch (e) {
                if (e.response && e.response.status === 429 && retryCount < 3) {
                    const retryAfter = Math.pow(2, retryCount) * 1000; 
                    console.warn(`Rate limit hit, retrying after ${retryAfter / 1000} seconds...`);
                    setTimeout(() => fetchTopAnime(retryCount + 1), retryAfter);
                } else {
                    console.error('Error fetching top anime:', e);
                }
            }
        };

        fetchTopAnime();
    }, []);

    useEffect(() => {
        const fetchLatestAnime = async (retryCount = 0) => {
            try {
                const response = await axios.get('https://api.jikan.moe/v4/seasons/now');
                setAnimeLatest(response.data.data);
            } catch (e) {
                if (e.response && e.response.status === 429 && retryCount < 3) {
                    const retryAfter = Math.pow(2, retryCount) * 1000; 
                    console.warn(`Rate limit hit, retrying after ${retryAfter / 1000} seconds...`);
                    setTimeout(() => fetchLatestAnime(retryCount + 1), retryAfter);
                } else {
                    console.error('Error fetching latest anime:', e);
                }
            }
        };

        fetchLatestAnime();
    }, []);

    return (
        <div className="px-11">
            <Carousel animeList={animeLatest} />
            {/* <p className='text-neutral-50 text-2xl font-medium font-Montserrat mt-2'>Top Anime</p> */}
            <Trailers animeLatest={animeLatest} />
        </div>
    );
};

export default Home;
