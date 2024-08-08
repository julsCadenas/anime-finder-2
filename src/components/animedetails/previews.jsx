import fetchAnime from "../../utils/fetchanime";
import React, { useEffect, useState } from 'react';
import Loading from "../loading";

const Previews = ({ id }) => {
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
        <main className="flex justify-center items-center">
            { isLoading ? <Loading/> :
                <div className="relative w-full max-w-4xl pb-[56.25%]">
                    {anime.trailer && anime.trailer.embed_url ? (
                        <iframe
                            src={`${anime.trailer.embed_url}?autoplay=0`}
                            frameBorder="0"
                            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            title={anime.title}
                            className="absolute top-0 left-0 w-full h-full rounded-lg"
                        />
                    ) : (
                        <p className='text-neutral-50'>No trailer available.</p>
                    )}
                </div>
            }
        </main>
    );
}

export default Previews;
