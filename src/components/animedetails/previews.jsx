import fetchAnime from "../../modules/fetchanime";
import React, { useEffect, useState } from 'react';

const Previews = ({id}) => {
    const [anime, setAnime] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const link = `https://api.jikan.moe/v4/anime/${id}/full`;

    useEffect(() => {
        fetchAnime(link, (data) => {
            setAnime(data);
            setIsLoading(false);
        });
    }, [id]);

    return (
        <div  className="w-96 h-80" >
        {anime.trailer && anime.trailer.embed_url ? (
            <iframe
                src={`${anime.trailer.embed_url}?autoplay=0`}
                frameBorder="0"
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title={anime.title}
                className="absolute w-96 h-80"
            />
        ) : (
            <p className='text-neutral-50'>No trailer available.</p>
        )}
        </div>
    )
}

export default Previews;