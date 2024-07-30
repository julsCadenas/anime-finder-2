import React, { useEffect, useState } from 'react';
import Carousel from '../components/carousel';
import Trailers from '../components/trailers';
import fetchAnime from '../modules/fetchanime';
import Loading from '../components/loading';

const Home = () => {
    const [animeList, setAnimeList] = useState([]);
    const [animeLatest, setAnimeLatest] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const topLink = 'https://api.jikan.moe/v4/top/anime';
    const latestLink = 'https://api.jikan.moe/v4/seasons/now';

    useEffect(() => {
        fetchAnime(topLink, (data) => {
            setAnimeList(data)
            setIsLoading(false)
        }
    )}, []);

    useEffect(() => {
        fetchAnime(latestLink, (data) => {
            setAnimeLatest(data)
            setIsLoading(false)
        }
    )}, []);

    return (
        <div className="px-6 pt-16 md:px-28 md:pt-20">
            {isLoading ? (
                <Loading />
            ) : (
                <>
                    <Carousel animeList={animeLatest} title={`This Season`} />
                    <div>
                        <Trailers animeLatest={animeLatest} />
                    </div>
                    <div className="pb-10 pt-16 md:pt-0">
                        <Carousel animeList={animeList} title={`Top Anime`} />
                    </div>
                </>
            )}
        </div>
    );
};

export default Home;
