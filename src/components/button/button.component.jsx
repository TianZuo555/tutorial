import './button.styles.scss';

const buttonClass = {
    default: 'btn-default',
    inverted: 'btn-inverted',
};

const Button = ({ children, btnType, ...otherProps }) => {
    return (
        <button className={`btn-container ${buttonClass[btnType]}`} {...otherProps}>
            {children}
        </button>
    );
};

export default Button;