import { useState } from 'react';

interface Props {
    onAddCategory: (category: string) => void;
}

export const AddCategory = ({ onAddCategory }: Props) => {
    const [category, setCategory] = useState('');

    const handleInputChange = (value: string) => {
        setCategory(value);
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (category.trim().length <= 1) return;

        onAddCategory(category);
        setCategory('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                className="form-control mb-2"
                placeholder="Search Gif"
                value={category}
                onChange={e => handleInputChange(e.target.value)}
            />
        </form>
    );
};
