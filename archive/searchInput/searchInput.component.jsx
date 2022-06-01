function SearchInput(props) {
    const { handleOnChange, placeholder } = props;
    return <input placeholder={placeholder} onChange={handleOnChange}></input>;
}

export default SearchInput;