import React, {useState, useEffect} from "react";
import {GifGridItem} from "./GifGridItem";

export const GifGrid = ({category}) => {

    const [images, setImages] = useState([]);

    useEffect(() => {
        getGifs();
    }, []);

    const getGifs = async () => {
        const url = `https://api.giphy.com/v1/gifs/search?q=${category}&limit=10&api_key=4HC5EFzdnkEJPm87O83Auh9lVYox1jP7`;
        const response = await fetch(url);
        const {data} = await response.json();

        const gifs = data.map(img => {
            return {
                id: img.id,
                title: img.title,
                url: img.images?.downsized_medium.url,
            };
        })

        setImages(gifs);
    };

    return (
        <>
            <h3>{category}</h3>

            <div className="card-grid">
                {images.map(image => (
                    <GifGridItem
                        key={image.id}
                        {...image}
                    />
                ))}
            </div>
        </>
    );
};
