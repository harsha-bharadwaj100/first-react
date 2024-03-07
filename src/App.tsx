import { useState } from "react";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";

function App() {
  let items = ["New York", "San Fransisco", "Tokyo", "London", "Paris"];
  let [selectedItem, setSelectedItem] = useState(false);
  const handleSelectedItem = (item: string) => {
    console.log(item);
    setSelectedItem(true);
  };

  return (
    <>
      <ListGroup
        items={items}
        heading={"Cities"}
        onSelectItem={handleSelectedItem}
      />
      <Button
        color={selectedItem ? "primary" : "secondary"}
        value={selectedItem ? false : true}
        onClick={() => {
          console.log("Clicked!");
        }}
      >
        My Button
      </Button>
    </>
  );
}

export default App;
// 24:52s
