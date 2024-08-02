import React, { useEffect, useState } from 'react';
import Carousel from '../components/carousel';
import Trailers from '../components/trailers';
import fetchAnime from '../modules/fetchanime';
import Loading from '../components/loading';

const Home = () => {
    const [animeList, setAnimeList] = useState([]);
    const [animeLatest, setAnimeLatest] = useState([]);
    const [animeUpcoming, setAnimeUpcoming] = useState([]);
    const [season, setSeason] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    const topLink = 'https://api.jikan.moe/v4/top/anime';
    const latestLink = 'https://api.jikan.moe/v4/seasons/now';
    const upcomingLink = 'https://api.jikan.moe/v4/seasons/upcoming';

    const getSeason = (anime) => {
        if(anime.length > 0){
            const {year, season} = anime[0];
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
        }
    )}, []);

    useEffect(() => {
        fetchAnime(upcomingLink, (data) => {
            setAnimeUpcoming(data);
            setIsLoading(false);
        }
    )}, []);

    useEffect(() => {
        fetchAnime(latestLink, (data) => {
            setAnimeLatest(data)
            setSeason(getSeason(data));
            setIsLoading(false)
        }
    )}, []);

    return (
        <div className="px-6 pt-16 md:px-28 md:pt-20">
            {isLoading ? (
                <Loading />
            ) : (
                <>
                    <Carousel animeList={animeLatest} title={season} nav='/airing'/>
                    <div>
                        <Trailers animeLatest={animeLatest} />
                    </div>
                    <div className="pb-10 pt-10">
                        <Carousel animeList={animeUpcoming} title={`Upcoming Anime`}/>
                    </div>
                    <div className="pb-10 pt-16 md:pt-10">
                        <Carousel animeList={animeList} title={`Top Anime`} nav='top'/>
                    </div>
                </>
            )}
        </div>
    );
};

export default Home;
