import { useEffect, useState } from 'react';

import { Image } from '../types';
import { getGifs } from '../helpers/getGifs';

export const useGifs = (category: string) => {
    const [images, setImages] = useState<Image[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    const getImages = async () => {
        const newImages = await getGifs(category);
        setImages(newImages);
        setIsLoading(false);
    };

    useEffect(() => {
        getImages();
    }, ['category']);

    return {
        images,
        isLoading,
    };
};
