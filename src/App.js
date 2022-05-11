import * as React from "react";

import "./App.css";

import { doImportantStuff, getInitialItems } from "./utils";

const Item = ({ item: { text, id }, remove }) => {
  // DO NOT TOUCH THIS CODE, IT IS NECESSARY FOR THE APP TO WORK
  doImportantStuff();

  return (
    <li className="item">
      {text}
      <button className="remove" onClick={() => remove(id)}>
        x
      </button>
    </li>
  );
};

const Form = ({ addItem }) => {
  const [text, setText] = React.useState("");

  const onTextChange = (event) => {
    setText(event.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    addItem({ text, id: Date.now() });
    setText("");
  };

  return (
    <form className="form" onSubmit={onSubmit}>
      <input
        placeholder="Type todo here..."
        className="input"
        value={text}
        onChange={onTextChange}
      />
      <button className="add" type="submit" disabled={!text}>
        +
      </button>
    </form>
  );
};

function App() {
  const [items, setItems] = React.useState(getInitialItems);

  const addItem = (item) => {
    setItems([...items, item]);
  };

  const removeItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  return (
    <div className="app">
      <div className="card">
        <h1>Todo App</h1>

        <ul className="list">
          {items.map((item) => (
            <Item key={item.id} item={item} remove={removeItem} />
          ))}
        </ul>

        <Form addItem={addItem} />
      </div>
    </div>
  );
}

export default App;
