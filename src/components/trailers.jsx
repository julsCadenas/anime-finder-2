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
            <div className="flex flex-col font-Montserrat bg-black w-full max-w-3xl">
                {randomAnime ? (
                    <>
                        {/* <p className="text-neutral-50 text-lg font-medium mb-2 text-center">{randomAnime.title}</p> */}
                        <p className="text-neutral-50 text-2xl font-medium mb-2">Airing Now</p>
                        <div className="flex flex-col sm:flex-row w-full">
                            {randomAnime.trailer && randomAnime.trailer.embed_url ? (
                                <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                                    <iframe
                                        src={randomAnime.trailer.embed_url}
                                        frameBorder="0"
                                        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                        title={randomAnime.title}
                                        className="absolute top-0 left-0 w-full h-full"
                                    ></iframe>
                                    <p className='text-neutral-50'>{randomAnime.title}</p>
                                </div>
                            ) : (
                                <p className='text-neutral-50'>No trailer available.</p>
                            )}
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
