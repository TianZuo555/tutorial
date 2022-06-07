import './categories.styles.scss';

import { useEffect, useState } from 'react';

import { Category } from '../category/Category.component';
import { getByApiEndpoint } from '../../apiUtils/apiUtils';

export default function Categories(props) {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        getByApiEndpoint('categories').then((response) => {
            setCategories(response);
        });
    }, []);

    return (
        <div className='categories-container'>
            {categories.map((category) => (
                <Category key={category.id} category={category}></Category>
            ))}
        </div>
    );
}
