import fetchAnime from "../../modules/fetchanime";
import React, { useEffect, useState } from 'react';
import Loading from "../loading";

const Characters = ({id}) => {
    const [anime, setAnime] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const link = `https://api.jikan.moe/v4/anime/${id}/characters`;

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
                    <ul className="font-Montserrat text-sm md:text-base">
                        {anime.map((chars, index) => (
                            <li key={index} className="my-2 mb-5 md:mx-24">
                                <div className="flex items-center justify-between">
                                    <summary className="flex text-left">
                                        <img className="w-16 md:w-20 rounded-md" src={chars.character.images.jpg.image_url} alt={chars.character.name}></img>
                                        <div className="flex flex-col justify-center ml-2">
                                            <p><strong>{chars.character.name}</strong></p>
                                            <p>{chars.role}</p>
                                        </div>
                                    </summary>
                                    <aside className="ml-10">
                                    { chars.voice_actors.map((actor, index) => (
                                        <summary key={index} className="flex items-center mb-2 text-right">
                                            <div className="flex flex-col mr-2">
                                                <p>{actor.person.name}</p>
                                                <p>{actor.language}</p>
                                            </div>
                                            <img className="w-16 md:w-20 rounded-md" src={actor.person.images.jpg.image_url} alt={actor.person.name}></img>
                                        </summary>
                                    ))}
                                    </aside>
                                </div>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </main>
    )
}

export default Characters;