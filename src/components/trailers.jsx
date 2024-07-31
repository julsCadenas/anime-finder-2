import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Loading from './loading';

const Trailers = ({ animeLatest }) => {
    const [randomAnime, setRandomAnime] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        if (animeLatest && animeLatest.length > 0) {
            const randomIndex = Math.floor(Math.random() * animeLatest.length);
            setRandomAnime(animeLatest[randomIndex]);
        }
    }, [animeLatest]);

    const animeClick = (id) => {
        navigate(`/anime/${id}`)
    }

    return (
        <section className="mt-20">
            <div className="flex flex-col font-Montserrat bg-black">
                {randomAnime ? (
                    <>
                        <div className="flex flex-col lg:flex-row">
                            <aside className="flex flex-col text-neutral-50 max-w-4xl w-full mr-10">
                                <p className="text-neutral-50 text-2xl font-bold mb-3">Airing Now</p>
                                <p className="text-3xl space-y-1 md:text-5xl font-bold mb-2">{randomAnime.title}</p>
                                <p className="text-base md:text-lg mb-2"><strong>Airing:</strong> {randomAnime.aired.string}</p>
                                <p className="text-sm md:text-base leading-6 mb-2 text-justify">{randomAnime.synopsis}</p>
                                <button className="bg-neutral-50 text-black text-xl rounded-md w-28 font-bold hover:bg-gray-300 mt-2 mb-4" onClick={()=>animeClick(randomAnime.mal_id)}>See All</button>
                            </aside>
                            <div className="relative w-full h-auto md:pb-[40%] pb-[56.25%] overflow-hidden rounded-md mt-4 mb-4 md:mt-0 md:mb-0">
                                {randomAnime.trailer && randomAnime.trailer.embed_url ? (
                                    <iframe
                                        src={`${randomAnime.trailer.embed_url}?autoplay=0`}
                                        frameBorder="0"
                                        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                        title={randomAnime.title}
                                        className="absolute top-0 left-0 w-full h-full md:h-4/5"
                                    />
                                ) : (
                                    <p className='text-neutral-50'>No trailer available.</p>
                                )}
                            </div>
                        </div>
                    </>
                ) : (
                    <Loading />
                )}
            </div>
        </section>
    );
};

export default Trailers;


