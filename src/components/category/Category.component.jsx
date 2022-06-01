export const Category = (props) => {
    const { title, id } = props.category;
    return (
        <div className='category-container' key={id}>
            <div className='category-body-container'>
                <h2>{title}</h2>
                <p>Shop Now</p>
            </div>
        </div>
    );
};
