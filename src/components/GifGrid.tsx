import { useGifs } from '../hooks/useGifs';
import { GifItem } from './';

interface Props {
    category: string;
}

export const GifGrid = ({ category }: Props) => {
    const { images, isLoading } = useGifs(category);

    return (
        <div>
            <h2>{category}</h2>

            {isLoading && <h3>Loading...</h3>}

            {!isLoading && (
                <div className="row">
                    {images.map(image => (
                        <GifItem key={image.id} image={image} />
                    ))}
                </div>
            )}
        </div>
    );
};
