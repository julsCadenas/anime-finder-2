import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'; 
import Loading from '../components/loading';
import fetchAnime from '../modules/fetchanime';
import MoreDetails from '../components/animedetails/moredetails';

const Details = () => {
    const { id } = useParams(); 
    const [anime, setAnime] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    const link = `https://api.jikan.moe/v4/anime/${id}/full`;

    useEffect(() => {
        fetchAnime(link, (data) => {
            setAnime(data);
            setIsLoading(false);
        });
    }, [id]);

    return (
        <main className="flex justify-center min-h-screen pt-16">
            {isLoading ? (
                <Loading />
            ) : (
                <div className="flex flex-col items-center max-w-screen-lg mx-4 md:mx-auto p-4">
                    <div className="flex flex-col md:flex-row items-center md:items-start">
                        <aside className="flex-shrink-0 mb-4 md:mb-0">
                            {anime.images && anime.images.jpg && (
                                <aside className="flex flex-col items-center">
                                    <img
                                        className="w-72 md:w-80 h-auto rounded-md"
                                        src={anime.images.jpg.large_image_url}
                                        alt={anime.title}
                                    />
                                    <div className="text-neutral-50 font-Montserrat text-lg md:text-xl border-2 border-neutral-50 p-2 w-72 md:w-80 flex justify-center items-center rounded-xl mt-3">
                                        <p className="mr-5"><strong>Score: {anime.score}</strong></p>
                                        <p><strong>Rank: {anime.rank}</strong></p>
                                    </div>
                                </aside>
                            )}
                        </aside>
                        <article className="text-neutral-50 font-Montserrat text-left ml-0 md:ml-5 md:text-left">
                            <p className="text-xl md:text-5xl font-bold">{anime.title}</p>
                            <p className="text-neutral-400 text-lg md:text-3xl mt-1 font-semibold">{anime.title_english}</p>
                            <div className="mt-2 text-sm leading-6">
                                <p><strong>Type: </strong>{anime.type}</p>
                                <p><strong>Episodes: </strong>{anime.episodes}</p>
                                <p><strong>Duration: </strong>{anime.duration}</p>
                                <p>
                                    <strong>Broadcast: </strong>
                                    {anime.broadcast ? (
                                        <>
                                            <span>{anime.broadcast.day}</span>, 
                                            <span> {anime.broadcast.time}</span>, 
                                            <span> {anime.broadcast.timezone}</span>
                                        </>
                                    ) : (
                                        <span>No broadcast information available.</span>
                                    )}
                                </p>
                                <p><strong>Status: </strong>{anime.status}</p>
                                <p><strong>Studios: </strong>{anime.studios && anime.studios.map(studio => studio.name).join(', ')}</p>
                                <p><strong>Source: </strong>{anime.source}</p>
                                <p><strong>Genres: </strong>{anime.genres && anime.genres.map(genre => genre.name).join(', ')}</p>
                                <p><strong>Themes: </strong>{anime.themes && anime.themes.map(theme => theme.name).join(', ')}</p>
                                <p><strong>Demographics: </strong>{anime.demographics && anime.demographics.map(demo => demo.name).join(', ')}</p>
                                <p><strong>Rating: </strong>{anime.rating}</p>
                                <p className="mt-2"><strong>Synopsis:</strong></p>
                                <p className="text-justify text-base">{anime.synopsis}</p>
                            </div>
                        </article>
                    </div>
                    <div className="w-full mt-8">
                        <MoreDetails id={id} />
                    </div>
                </div>
            )}
        </main>
    );
};

export default Details;
