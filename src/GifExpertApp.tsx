import { Fragment, useState } from 'react';

import { AddCategory, GifGrid } from './components';

const GifExpertApp = () => {
    const [categories, setCategories] = useState(['One Punch']);

    const handleAddCategory = (category: string) => {
        setCategories([...categories, category]);
    };

    return (
        <Fragment>
            <h1 className="mb-2">GifExpertApp</h1>

            <AddCategory onAddCategory={handleAddCategory} />

            {categories.map(category => (
                <GifGrid key={category} category={category} />
            ))}
        </Fragment>
    );
};

export default GifExpertApp;
