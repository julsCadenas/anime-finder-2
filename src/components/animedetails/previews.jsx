import fetchAnime from "../../modules/fetchanime";
import React, { useEffect, useState } from 'react';

const Previews = ({id}) => {
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
        <>Previews</>
    )
}

export default Previews;