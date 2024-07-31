import fetchAnime from "../../modules/fetchanime";
import React, { useEffect, useState } from 'react';

const Characters = ({id}) => {
    const [anime, setAnime] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const link = `https://api.jikan.moe/v4/anime/${id}/full`;

    useEffect(() => {
        fetchAnime(link, (data) => {
            setAnime(data);
            setIsLoading(false);
        });
    }, [id]);

    return (
        <>Characters</>
    )
}

export default Characters;