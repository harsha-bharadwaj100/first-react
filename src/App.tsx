import ListGroup from "./components/ListGroup";

function App() {
  let items = ["New York", "San Fransisco", "Tokyo", "London", "Paris"];

  const handleSelectedItem = (item: string) => {
    console.log(item);
  };

  return (
    <ListGroup
      items={items}
      heading={"Cities"}
      onSelectItem={handleSelectedItem}
    />
  );
}

export default App;
// 24:52s
