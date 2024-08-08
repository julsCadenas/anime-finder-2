import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AnimeList from '../components/animelist';
import Pagination from '../components/pagination';

const Upcoming = () => {
    const [pageNum, setPageNum] = useState(1);
    const navigate = useNavigate();
    const pageLink = `https://api.jikan.moe/v4/seasons/now?page=${pageNum}`;

    const animeClick = (id) => {
        navigate(`/anime/${id}`);
    };      

    return (
        <main>
            <AnimeList title={'Upcoming Anime'} pageNum={pageNum} setPageNum={setPageNum} pageLink={pageLink} onAnimeClick={animeClick} />
        </main>
    );
};

export default Upcoming;
