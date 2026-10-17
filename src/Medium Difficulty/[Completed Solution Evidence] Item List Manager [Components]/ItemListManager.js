import { useState } from "react";

function ItemListManager() {
  const [items, setItems] = useState([]);
  const [input, setInput] = useState("");

  const handleAddItem = () => {
    if (input.length > 0) {
      // TODO: Add logic to add input to items list
      setItems([...items, input]);
      setInput("");
    }
  };

  return (
    <>
      <div className="App">
        <h3>Item List</h3>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter item"
          data-testid="input-field"
        />
        <button onClick={handleAddItem} data-testid="add-button">
          Add Item
        </button>
        <ul data-testid="item-list">
          {items.map((item, index) => (
            <li key={index} data-testid="list-item">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default ItemListManager;
