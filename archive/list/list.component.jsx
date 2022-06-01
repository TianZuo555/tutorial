function List(props) {
    const { value } = props;
    return value.map((item, index) => <p key={item.id ? item.id : index}>{`${item.name}`}</p>);
}

export default List;
