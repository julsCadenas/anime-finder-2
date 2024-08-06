import fetchAnime from "../../modules/fetchanime";
import React, { useEffect, useState } from 'react';
import Loading from "../loading";

const Characters = ({ id }) => {
    const [anime, setAnime] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [showEnglish, setShowEnglish] = useState(false); 
    const link = `https://api.jikan.moe/v4/anime/${id}/characters`;

    useEffect(() => {
        fetchAnime(link, (data) => {
            setAnime(data);
            setIsLoading(false);
        });
    }, [id]);

    const handleToggleChange = (event) => {
        setShowEnglish(event.target.checked);
    };

    return (
        <main>
            <div className="text-neutral-50 font-Montserrat">
                {isLoading ? (
                    <Loading />
                ) : (
                    <>
                        <label className="inline-flex items-center cursor-pointer md:mb-4">
                            <input
                                type="checkbox"
                                className="sr-only peer"
                                checked={showEnglish}
                                onChange={handleToggleChange}
                            />
                            <div className="relative w-11 h-6 bg-neutral-50 rounded-full peer 
                                            peer-checked:after:translate-x-full 
                                            rtl:peer-checked:after:-translate-x-full peer-checked:after:border-black after:content-[''] after:absolute after:top-[2px] after:start-[2px]
                                            after:bg-black after:border-black after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-gray-300"></div>
                            <span className="ms-3 text-sm font-medium text-neutral-50">
                                {showEnglish ? "EN" : "JP"}
                            </span>
                        </label>
                        <ul className="font-Montserrat text-sm md:text-base">
                            {anime.map((chars, index) => (
                                <li key={index} className="my-4 -mx-3 md:mx-24">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center flex-1">
                                            <img className="w-16 md:w-20 rounded-md" src={chars.character.images.jpg.image_url} alt={chars.character.name} />
                                            <div className="ml-4 flex flex-col">
                                                <p className="font-bold">{chars.character.name}</p>
                                                <p>{chars.role}</p>
                                            </div>
                                        </div>
                                        <aside className="flex flex-col items-end ml-8">
                                            {chars.voice_actors.filter(actor => actor.language === ( showEnglish ? "English" : "Japanese" ) ).map((actor, index) => (
                                                <div key={index} className="flex items-center mb-2">
                                                    <div className="flex flex-col mr-2 text-right">
                                                        <p>{actor.person.name}</p>
                                                        <p>{actor.language}</p>
                                                    </div>
                                                    <img className="w-16 md:w-20 rounded-md" src={actor.person.images.jpg.image_url} alt={actor.person.name} />
                                                </div>
                                            ))}
                                        </aside>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </>
                )}
            </div>
        </main>
    );
}

export default Characters;
