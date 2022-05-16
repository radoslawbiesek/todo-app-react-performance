import * as React from "react";

import "./App.css";

import { doImportantStuff, getInitialItems, shuffle } from "./utils";

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
  const [items, setItems] = React.useState(getInitialItems());
  const [counter, setCounter] = React.useState(0);

  const addItem = (item) => {
    setItems([...items, item]);
  };

  const removeItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  const onClick = () => {
    setCounter((counter) => counter + 1);
    setItems(shuffle(items));
  };

  return (
    <div className="app">
      <div className="card">
        <div className="header">
          <h1>Todo App</h1>
          <button className="shuffle" onClick={onClick}>
            Shuffle items ({counter})
          </button>
        </div>
        <ul>
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
