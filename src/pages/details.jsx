import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'; 
import Loading from '../components/loading';
import fetchAnime from '../modules/fetchanime';

const Details = () => {
    const { id } = useParams(); 
    const [anime, setAnime] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    const link = `https://api.jikan.moe/v4/anime/${id}/full`;

    useEffect(() => {
        fetchAnime(link, (data) => {
            setAnime(data)
            setIsLoading(false)
        }
    )}, [id]);

    return(
        <main>
            { isLoading ? (
                <Loading />
            ) : (
                <div className='flex justify-center items-center h-screen'>
                    <aside className='max-h-auto max-w-80'>
                        {anime.images && anime.images.jpg && (
                            <img className='w-full h-auto rounded-md' src={anime.images.jpg.large_image_url}></img> 
                        )}
                    </aside>
                    <p className='text-neutral-50'>{anime.title}</p>
                </div>
            )
            }
        </main>
    )
};

export default Details;