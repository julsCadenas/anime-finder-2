import axios from 'axios';

const fetchAnime = async (link, setAnimeData, retryCount = 0) => {
    try {
        const response = await axios.get(link);
        setAnimeData(response.data); 
    } catch (e) {
        if (e.response && e.response.status === 429 && retryCount < 3) {
            const retryAfter = Math.pow(2, retryCount) * 1000; 
            console.warn(`Rate limit hit, retrying after ${retryAfter / 1000} seconds...`);
            setTimeout(() => fetchAnime(link, setAnimeData, retryCount + 1), retryAfter);
        } else {
            console.error('Error fetching anime:', e);
        }
    }
};

export default fetchAnime;
