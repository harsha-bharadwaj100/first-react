import { useState } from "react";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";

function App() {
  let [items, setItems] = useState([
    "New York",
    "San Fransisco",
    "Tokyo",
    "London",
    "Paris",
  ]);
  let countries = ["India", "USA", "Australia", "Japan", "Brazil"];
  let [header, setHeader] = useState("Cities");

  let [selectedItem, setSelectedItem] = useState(false);
  const handleSelectedItem = (item: string) => {
    console.log(item);
    setSelectedItem(true);
  };

  const next = () => {
    setItems(countries);
    setHeader("Countries");
  };

  return (
    <>
      <ListGroup
        items={items}
        heading={header}
        onSelectItem={handleSelectedItem}
      />
      <Button
        color={selectedItem ? "primary" : "secondary"}
        isDisabled={selectedItem ? false : true}
        onClick={() => {
          console.log("Clicked!");
          next();
        }}
      >
        <h1>My Button</h1>
        <h6>Html passing is soooo cooool!!!</h6>
      </Button>
    </>
  );
}

export default App;
// 24:52s
