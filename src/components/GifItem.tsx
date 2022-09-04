import { Image } from '../types';

interface Props {
    image: Image;
}

export const GifItem = ({ image }: Props) => {
    return (
        <div className="card col-4 m-2" style={{ width: '18rem' }}>
            <img src={image.url} className="card-img-top" />
            <div className="card-body">
                <h5 className="card-title">{image.title}</h5>
            </div>
        </div>
    );
};
