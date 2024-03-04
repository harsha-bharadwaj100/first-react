function ListGroup() {
  let item = ["New York", "San Fransisco", "Tokyo", "London", "Paris"];
  // item = [];

  function getMessage() {
    return item.length === 0 ? <p>No item found</p> : null;
  }
  return (
    <>
      <h1>List</h1>
      {getMessage()}
      <ul className="list-group">
        {item.map((item, index) => (
          <li
            className="list-group-item"
            key={item}
            onClick={(event) => console.log(index, item, event)}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
