import fetchAnime from "../../modules/fetchanime";
import React, { useEffect, useState } from 'react';

const Staff = ({id}) => {
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
        <>Staff</>
    )
}

export default Staff;