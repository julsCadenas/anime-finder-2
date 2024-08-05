import fetchAnime from "../../modules/fetchanime";
import React, { useEffect, useState } from 'react';
import Loading from "../loading";

const Characters = ({id}) => {
    const [anime, setAnime] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const link = `https://api.jikan.moe/v4/anime/${id}/staff`;

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
                    <ul className="font-Montserrat text-sm md:text-base flex flex-wrap">
                        {anime.map((staff, index) => (
                            <li key={index} className="w-full md:w-1/2 my-2 mb-5 px-2">
                                <div className="flex items-center justify-between">
                                    <summary className="flex text-left">
                                        <img className="w-16 md:w-20 rounded-md" src={staff.person.images.jpg.image_url} alt={staff.person.name}></img>
                                        <div className="flex flex-col justify-center ml-2">
                                            <p><strong>{staff.person.name}</strong></p>
                                            <p>{staff.positions}</p>
                                        </div>
                                    </summary>
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
