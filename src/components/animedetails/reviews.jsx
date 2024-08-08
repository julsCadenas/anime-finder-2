import fetchAnime from "../../utils/fetchanime";
import React, { useEffect, useState } from 'react';
import Loading from "../loading";

const Reviews = ({ id }) => {
    const [anime, setAnime] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [expandedReviews, setExpandedReviews] = useState({});
    const link = `https://api.jikan.moe/v4/anime/${id}/reviews`;

    useEffect(() => {
        fetchAnime(link, (data) => {
            setAnime(data);
            setIsLoading(false);
        });
    }, [id]);

    const toggleExpanded = (index) => {
        setExpandedReviews(prevState => ({
            ...prevState,
            [index]: !prevState[index]
        }));
    };

    return (
        <div className="bg-black font-Montserrat text-neutral-50">
            {isLoading ? (
                <Loading />
            ) : (
                <main>
                    <ul>
                        {anime.map((revs, index) => (
                            <li className="rounded-lg border-gray-500 p-3 border-2 mb-2" key={index}>
                                <section className="flex justify-between">
                                    <div className="flex">
                                        <img className='w-28 h-28 mr-3 rounded-md object-cover' src={revs.user.images.jpg.image_url} alt={`${revs.user.username}'s avatar`} />
                                        <div className="flex flex-col">
                                            <p className="text-lg md:text-xl"><strong>{revs.user.username}</strong></p>
                                            <div className="md:mt-2">
                                                <p><strong>Score: </strong>{revs.score}</p>
                                                <p><strong>Episodes Watched: </strong>{revs.episodes_watched}</p>
                                            </div>
                                            <details className="block md:hidden m-2">
                                                <p className="mt-2"><strong>Date: </strong>{(revs.date).slice(0, 10)}</p>
                                                <p><strong>Spoiler: </strong>{revs.is_spoiler ? 'Yes' : 'No'}</p>
                                                <p><strong>Preliminary: </strong>{revs.is_preliminary ? 'Yes' : 'No'}</p>     
                                            </details>
                                        </div>
                                    </div>
                                    <div className="hidden md:flex flex-col text-right">
                                        <p><strong>Date: </strong>{(revs.date).slice(0, 10)}</p>
                                        <p><strong>Spoiler: </strong>{revs.is_spoiler ? 'Yes' : 'No'}</p>
                                        <p><strong>Preliminary: </strong>{revs.is_preliminary ? 'Yes' : 'No'}</p>
                                    </div>
                                </section>
                                <summary className="text-justify mt-3">
                                    <p className="inline text-sm">{expandedReviews[index] ? revs.review : `${revs.review.slice(0, 300)}...`}</p>
                                    <button
                                        className="text-gray-300 hover:text-gray-500 focus:outline-none ml-2 flex items-center"
                                        onClick={() => toggleExpanded(index)}
                                    >
                                        {expandedReviews[index] ? (
                                            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <path d="M5 15l7-7 7 7" />
                                            </svg>
                                        ) : (
                                            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <path d="M19 9l-7 7-7-7" />
                                            </svg>
                                        )}
                                        <strong>{expandedReviews[index] ? ' Read Less' : ' Read More'}</strong>
                                    </button>
                                </summary>
                                <div className="mt-3">
                                    <p><strong>Tags: </strong>{revs.tags.join(', ')}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </main>
            )}
        </div>
    )
}

export default Reviews;
