import fetchAnime from '../utils/fetchdata';
import React, { useEffect, useState } from 'react';
import Loading from '../components/loading';
import Pagination from '../components/pagination';

const AnimeList = ({ title, pageLink, onAnimeClick, pageNum, setPageNum }) => {
    const [anime, setAnime] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [lastVisiblePage, setLastVisiblePage] = useState(1);

    useEffect(() => {
        const fetchPage = async () => {
            fetchAnime(pageLink, (data) => {
                setAnime(data.data); 
                if (data.pagination) {
                    setLastVisiblePage(data.pagination.last_visible_page); 
                }
                setIsLoading(false);
            });
        };
        fetchPage();
    }, [pageLink]);

    return (
        <main className='pt-20 font-Montserrat'>
            <>
            <p className='text-neutral-50 font-Montserrat text-2xl font-bold flex justify-center mb-4'>{title}</p>
            {isLoading ? <Loading /> :
                <ul className='flex flex-wrap justify-center px-4 lg:px-52'>
                    {anime.map((ani, index) => (
                    <li key={index} className='py-1 relative w-50 h-auto m-1 group cursor-pointer' onClick={() => onAnimeClick(ani.mal_id)}>
                        <img className='w-40 rounded-md cursor-pointer' src={ani.images.jpg.image_url} alt={ani.title}  />
                        <div className='absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity'>
                            <p className='text-neutral-50 text-center px-2 font-bold'>{ani.title}</p>
                            <p className='text-neutral-50 text-center px-2 font-semibold mt-1 w-3/4 border-t-2'>{ani.score ? (ani.score).toFixed(2) : 'TBD'}</p>
                        </div>
                    </li>
                    ))}
                </ul>
            }
            </>
            <Pagination anime={anime} pageNum={pageNum} setPageNum={setPageNum} lastVisiblePage={lastVisiblePage} />
        </main>
    );
};

export default AnimeList;
