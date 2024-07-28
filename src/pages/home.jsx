import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import Carousel from '../components/carousel';

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
            <Carousel animeList={animeList} />
        </div>
    );
};

export default Home;
