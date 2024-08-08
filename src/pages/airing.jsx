import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AnimeList from '../components/animelist';
import fetchAnime from '../utils/fetchdata';

const Airing = () => {
    const [pageNum, setPageNum] = useState(1);
    const [season, setSeason] = useState('');
    const navigate = useNavigate();
    const pageLink = `https://api.jikan.moe/v4/seasons/now?page=${pageNum}`;
    const link = `https://api.jikan.moe/v4/seasons/now`;
    
    const getSeason = (data) => {
        if (data && data.data && data.data.length > 0) {
            const { year, season } = data.data[0];
            const seasonName = `${season}`;
            const capSeason = seasonName.charAt(0).toUpperCase() + seasonName.slice(1);
            return `${capSeason} ${year}`;
        }
        return '';
    };

    useEffect(() => {
        fetchAnime(link, (data) => {
            setSeason(getSeason(data));
        });
    }, []);

    const animeClick = (id) => {
        navigate(`/anime/${id}`);
    };

    return (
        <main>
            <AnimeList title={season} pageNum={pageNum} setPageNum={setPageNum} pageLink={pageLink} onAnimeClick={animeClick} />
        </main>
    );
};

export default Airing;
