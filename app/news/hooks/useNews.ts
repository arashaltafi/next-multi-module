
export const useNews = async () => {
    const response = await fetch('http://localhost:3000/news/api/getNews');
    const res = await response.json()
    return res
};