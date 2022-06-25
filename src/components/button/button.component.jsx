import './button.styles.scss';

const buttonClass = {
    default: 'btn-default',
    inverted: 'btn-inverted',
};

export const Button = ({ children, btnType, ...otherProps }) => {
    return (
        <button className={`btn-container ${buttonClass[btnType]}`} {...otherProps}>
            {children}
        </button>
    );
};
