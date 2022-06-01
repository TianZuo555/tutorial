import './category.component.scss';

export const Category = (props) => {
    const { title, id, imageUrl } = props.category;
    return (
        <div className='category-container' key={id}>
        <div className='background-image' style={{
            'backgroundImage': `url(${imageUrl})`
        }}></div>
            <div className='category-body-container'>
                <h2>{title}</h2>
                <p>Shop Now</p>
            </div>
        </div>
    );
};
