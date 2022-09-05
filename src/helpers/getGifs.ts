import { Image } from '../types';

export const getGifs = async (category: string): Promise<Image[]> => {
    const apiKey = import.meta.env.VITE_GIPHY_API_KEY;
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${category}&limit=10`;
    const res = await fetch(url);
    const { data } = await res.json();

    const gifs = data.map((img: any) => ({
        id: img.id,
        title: img.title,
        url: img.images.original.url,
    }));

    return gifs;
};
