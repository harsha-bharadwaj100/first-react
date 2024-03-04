import ListGroup from "./components/ListGroup";

function App() {
  let items = ["New York", "San Fransisco", "Tokyo", "London", "Paris"];

  return <ListGroup items={items} heading={"Cities"} />;
}

export default App;
// 24:52s
