import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Carousel from '../components/carousel';
import Trailers from '../components/trailers';
import fetchAnime from '../modules/fetchanime';

const Home = () => {
    const [animeList, setAnimeList] = useState([]);
    const [animeLatest, setAnimeLatest] = useState([]);
    const topLink = 'https://api.jikan.moe/v4/top/anime'
    const latestLink = 'https://api.jikan.moe/v4/seasons/now'

    useEffect(() => {
        fetchAnime(topLink, setAnimeList)
    }, []);

    useEffect(() => {
        fetchAnime(latestLink ,setAnimeLatest)
    }, []);

    return (
        <div className="px-6 pt-16 md:px-28 md:pt-20">
            <Carousel animeList={animeLatest} title={`This Season`}/>
            <div className=''>
                <Trailers animeLatest={animeLatest} />
            </div>
            <div className='pb-10 pt-16 md:pt-0'>
                {/* <p className='text-neutral-50 font-Montserrat text-2xl font-bold mb-3'>Top Anime</p> */}
                <Carousel animeList={animeList} title={`Top Anime`}/>
            </div>
        </div>
    );
};

export default Home;
