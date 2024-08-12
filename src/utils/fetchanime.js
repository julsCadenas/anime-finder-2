import axios from 'axios';

const MAX_RETRIES = 3;
const RETRY_DELAY_BASE = 1000; 
const REQUESTS_PER_SECOND = 3;

let lastRequestTime = Date.now();

const fetchAnime = async (link, setAnimeList, retryCount = 0) => {
    try {
        // Throttle request
        const now = Date.now();
        const timeSinceLastRequest = now - lastRequestTime;
        const timeToWait = Math.max(0, (1000 / REQUESTS_PER_SECOND) - timeSinceLastRequest);

        if (timeToWait > 0) {
            await new Promise(resolve => setTimeout(resolve, timeToWait));
        }

        lastRequestTime = Date.now();
        
        const response = await axios.get(link);
        setAnimeList(response.data.data);
    } catch (e) {
        if (e.response && e.response.status === 429 && retryCount < MAX_RETRIES) {
            const retryAfter = Math.pow(2, retryCount) * RETRY_DELAY_BASE; 
            console.warn(`Rate limit hit, retrying after ${retryAfter / 1000} seconds...`);
            setTimeout(() => fetchAnime(link, setAnimeList, retryCount + 1), retryAfter);
        } else {
            console.error('Error fetching anime:', e);
        }
    }
};

export default fetchAnime;
