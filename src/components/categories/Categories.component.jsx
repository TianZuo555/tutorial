import './categories.styles.scss';

import { useEffect, useState } from 'react';

import { Category } from '../category/Category.component';
import { getResultByApi } from '../../apiUtils/apiUtils';

export default function Categories(props) {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        getResultByApi('categories').then((response) => {
            setCategories(response);
        });
    }, []);

    return (
        <div className='categories-container'>
            {categories.map((category) => (
                <Category category={category}></Category>
            ))}
        </div>
    );
}
