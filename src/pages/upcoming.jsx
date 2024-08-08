import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AnimeList from '../components/animelist';

const Top = () => {
    const [pageNum, setPageNum] = useState(1);
    const navigate = useNavigate();
    const pageLink = `https://api.jikan.moe/v4/seasons/upcoming?page=${pageNum}`;

    const nextPage = () => {
        setPageNum((prevPageNum) => prevPageNum + 1);
    };

    const prevPage = () => {
        pageNum <= 1 ? 
            (setPageNum(pageNum)) 
            : (setPageNum((prevPageNum) => prevPageNum - 1));
    };

    const animeClick = (id) => {
        navigate(`/anime/${id}`);
    };

    return (
        <main>
            <AnimeList title={'Upcoming Anime'} pageLink={pageLink} onAnimeClick={animeClick} />
            {/* <div className='flex justify-center py-5'>
                <button onClick={prevPage} className='bg-neutral-50 mr-2'>Previous Page</button>
                <button onClick={nextPage} className='bg-neutral-50'>Next Page</button>
            </div> */}
        </main>
    );
};

export default Top;
