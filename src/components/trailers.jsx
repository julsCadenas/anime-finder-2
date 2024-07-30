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
        <section className="mt-20">
            <div className="flex flex-col font-Montserrat bg-black">
                {randomAnime ? (
                    <>
                        <div className="flex flex-col lg:flex-row">
                            <aside className="flex flex-col text-neutral-50 max-w-4xl w-full mr-10">
                                <p className="text-neutral-50 text-2xl font-bold mb-3">Airing Now</p>
                                <p className="text-3xl space-y-1 md:text-5xl font-bold mb-2">{randomAnime.title}</p>
                                {/* <p className="text-lg md:text-xl mb-2"><strong>Episodes: </strong> {randomAnime.episodes}</p> */}
                                {/* <p className="text-lg md:text-xl mb-2"><strong>Status: </strong> {randomAnime.status}</p> */}
                                <p className="text-base md:text-lg mb-2"><strong>Airing:</strong> {randomAnime.aired.string}</p>
                                <p className="text-sm md:text-base leading-6 mb-2 text-justify">{randomAnime.synopsis}</p>
                                <button className="bg-neutral-50 text-black text-xl rounded-md w-28 font-bold hover:bg-gray-300 mt-2 mb-4">See All</button>
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
                    <div role="status" className='flex justify-center'>
                        <svg aria-hidden="true" class="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-slate-50" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                        </svg>
                        <span class="sr-only">Loading...</span>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Trailers;
