import React, { useEffect, useState, lazy, Suspense } from 'react';
import fetchAnime from '../utils/fetchanime';
const Carousel = lazy(() => import('../components/carousel'));
const Trailers = lazy(() => import('../components/trailers'));
const Loading = lazy(() => import('../components/loading'));

const Home = () => {
    const [animeList, setAnimeList] = useState([]);
    const [animeLatest, setAnimeLatest] = useState([]);
    const [animeUpcoming, setAnimeUpcoming] = useState([]);
    const [season, setSeason] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    let latestPage = Math.floor(Math.random() * 6) + 1;
    let upcomingPage = Math.floor(Math.random() * 18) + 1;
    const topLink = 'https://api.jikan.moe/v4/top/anime?sfw=true';
    const latestLink = `https://api.jikan.moe/v4/seasons/now?sfw=true`;
    const upcomingLink = `https://api.jikan.moe/v4/seasons/upcoming?page=${upcomingPage}&sfw=true`;

    const getSeason = (anime) => {
        if (anime.length > 0) {
            const { year, season } = anime[0];
            const seasonName = `${season}`;
            const capSeason = seasonName.charAt(0).toUpperCase() + seasonName.slice(1);
            return `${capSeason} ${year}`;
        }
        return '';
    };

    useEffect(() => {
        fetchAnime(topLink, (data) => {
            setAnimeList(data);
            setIsLoading(false);
        });
    }, []);

    useEffect(() => {
        fetchAnime(upcomingLink, (data) => {
            setAnimeUpcoming(data);
            setIsLoading(false);
        });
    }, []);

    useEffect(() => {
        fetchAnime(latestLink, (data) => {
            setAnimeLatest(data);
            setSeason(getSeason(data));
            setIsLoading(false);
        });
    }, []);

    return (
        <div className="px-6 pt-16 md:px-28 md:pt-20">
            {isLoading ? (
                <Suspense fallback={<div>Loading...</div>}>
                    <Loading />
                </Suspense>
            ) : (
                <>
                    <Suspense fallback={<div>Loading Carousel...</div>}>
                        <Carousel animeList={animeLatest} title={season} shuffle={true} nav='/airing' />
                    </Suspense>
                    <div>
                        <Suspense fallback={<div>Loading Trailers...</div>}>
                            <Trailers animeLatest={animeLatest} />
                        </Suspense>
                    </div>
                    <div className="pb-10 pt-10">
                        <Suspense fallback={<div>Loading Upcoming Carousel...</div>}>
                            <Carousel animeList={animeUpcoming} title={`Upcoming Anime`} shuffle={true} nav='/upcoming' />
                        </Suspense>
                    </div>
                    <div className="pb-10 pt-16 md:pt-10">
                        <Suspense fallback={<div>Loading Top Carousel...</div>}>
                            <Carousel animeList={animeList} title={`Top Anime`} shuffle={false} nav='/top' />
                        </Suspense>
                    </div>
                </>
            )}
        </div>
    );
};

export default Home;
