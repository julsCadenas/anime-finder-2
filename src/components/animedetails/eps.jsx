import fetchAnime from "../../modules/fetchanime";
import React, { useEffect, useState } from 'react';
import Loading from "../loading";

const Episodes = ({ id }) => {
    const [anime, setAnime] = useState({});
    const [episode, setEpisode] = useState({});
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
                    <ul className="font-Montserrat">
                        {anime.map((eps, index) => (
                            <li key={index} className="my-2 text-base">
                                <details>
                                    <summary className="mb-2 hover:text-gray-300"><strong>Episode {eps.mal_id}: </strong>{eps.title}</summary>
                                    <section className="border-t-2 border-neutral-300 p-2 text-sm">
                                        <p><strong>{eps.title_japanese}</strong></p>
                                        <p><strong>Score: </strong>{eps.score}</p>
                                        <p><strong>Aired: </strong>{(eps.aired ? eps.aired.slice(0, 10) : 'No air date available')}</p>
                                    </section>
                                </details> 
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </main>
    );
}

export default Episodes;
