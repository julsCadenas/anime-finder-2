import fetchAnime from "../../modules/fetchanime";
import React, { useEffect, useState } from 'react';
import Loading from "../loading";

const Episodes = ({ id }) => {
    const [anime, setAnime] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const link = `https://api.jikan.moe/v4/anime/${id}/episodes`;

    useEffect(() => {
        fetchAnime(link, (data) => {
            setAnime(data);
            setIsLoading(false);
        });
    }, [id]);

    return (
        <main>
            <div className="text-neutral-50">
                {isLoading ? (
                    <Loading />
                ) : (
                    <ul>
                        {anime.map((eps, index) => (
                            <>
                                <li key={index}><strong>Episode {eps.mal_id}: </strong>{eps.title}</li>
                                <details>
                                    <summary>Show</summary>
                                    <p><strong>Score: </strong>{eps.score}</p>
                                </details> 
                            </>
                        ))}
                    </ul>
                )}
            </div>
        </main>
    );
}

export default Episodes;
