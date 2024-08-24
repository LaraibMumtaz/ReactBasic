function ListGroup() {
  const items = ["bahawalpur", "lahore", "karachi", "RYk"];

  return (
    <>
      <ul>
        <h1>List</h1>
        {items.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
