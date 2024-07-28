import React, { useState, useEffect } from 'react';

const Trailers = ({ animeLatest }) => {
    const [randomAnime, setRandomAnime] = useState(null);

    useEffect(() => {
        if (animeLatest && animeLatest.length > 0) {
            const randomIndex = Math.floor(Math.random() * animeLatest.length);
            setRandomAnime(animeLatest[randomIndex]);
        }
    }, [animeLatest]);

    return (
        <section className="mt-14">
            <div className="flex flex-col font-Montserrat bg-black">
                {randomAnime ? (
                    <>
                        <div className="flex flex-col md:flex-row">
                            <aside className="flex flex-col text-neutral-50 max-w-4xl w-full mr-5">
                                <p className="text-neutral-50 text-2xl font-bold mb-3">Airing Now</p>
                                <p className="text-3xl md:text-5xl font-bold mb-2">{randomAnime.title}</p>
                                <p className="text-lg md:text-xl mb-2"><strong>Episodes: </strong> {randomAnime.episodes}</p>
                                <p className="text-lg md:text-xl mb-2"><strong>Status: </strong> {randomAnime.status}</p>
                                <p className="text-lg md:text-xl mb-2"><strong>Airing:</strong> {randomAnime.aired.string}</p>
                                <p className="text-xs md:text-sm mb-2 text-justify">{randomAnime.synopsis}</p>
                                <button className="bg-neutral-50 text-black text-lg rounded-md w-24 font-bold hover:bg-gray-300 mt-2">See All</button>
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
                    <p className='text-neutral-50'>No anime selected.</p>
                )}
            </div>
        </section>
    );
};

export default Trailers;
