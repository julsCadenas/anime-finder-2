import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import fetchAnime from '../utils/fetchanime';
import Loading from './loading';

const Search = ({ onClose }) => {
    const [animeList, setAnimeList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [title, setTitle] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        if (title.trim() === '') {
            setIsLoading(false);
            setAnimeList([]);
            return;
        }

        const link = `https://api.jikan.moe/v4/anime?q=${title}`;

        setIsLoading(true);
        fetchAnime(link, (data) => {
            setAnimeList(data);
            setIsLoading(false);
        });
    }, [title]);

    const animeClick = (id) => {
        navigate(`/anime/${id}`);
        onClose();
    };

    const handleInput = (e) => {
        setTitle(e.target.value);
    };

    const onMousedown = (e) => {
        onClose();
    };

    const searchMouseDown = (e) => {
        e.stopPropagation(); 
    };

    return (
        <div className="bg-black bg-opacity-5 backdrop-filter backdrop-blur-sm h-screen w-screen transition-all" onMouseDown={onMousedown}>
            <form className="max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
                <div className="relative">
                    <input
                        type="text"
                        id="default-search"
                        value={title}
                        onChange={handleInput}
                        onMouseDown={searchMouseDown} 
                        autoFocus
                        className="w-11/12 md:w-full h-12 pl-3 bg-black bg-opacity-5 backdrop-filter backdrop-blur-sm border-b-2 border-transparent 
                                    focus:border-neutral-50 focus:outline-none font-Montserrat text-lg md:text-xl 
                                    text-neutral-50 mt-12 md:mt-20 transition-colors duration-300"
                        placeholder="Search for Anime here"
                    />
                </div>
            </form>
            {isLoading ? (
                <Loading />  
            ) : (
                <div className="flex justify-center items-start overflow-y-auto h-[calc(100vh-96px)]">
                    <ul className="text-neutral-50 flex flex-col items-center font-Montserrat w-full max-w-3xl" onMouseDown={searchMouseDown}>
                        {animeList.map((anime) => (
                            <li key={anime.mal_id} className='text-base md:text-xl flex items-center gap-3 mt-5 w-full md:w-4/5 lg:w-3/4 cursor-pointer hover:text-gray-300 font-medium' onClick={() => animeClick(anime.mal_id)}>
                                <img src={anime.images.jpg.large_image_url}
                                    className='w-16 h-auto rounded-md' />
                                <span className='flex-1'>{anime.title}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Search;
