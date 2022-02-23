import { useState, useEffect } from "react";
import List from "./List";
import Alert from "./Alert";
const getLocalStorage = () => {
  let list = localStorage.getItem("list");
  if (list) {
    return JSON.parse(localStorage.getItem("list"));
  } else {
    return [];
  }
};
function App() {
  const [name, setName] = useState("");
  const [list, setList] = useState(getLocalStorage());
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);
  const [alert, setAlert] = useState({
    show: false,
    msg: "",
    type: "",
  });
  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(list));
  }, [list]);
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name) {
      //display alert
      setAlert({ show: true, msg: "please enter value", type: "danger" });
    } else if (name && isEditing) {
      //editing
      setList(
        list.map((item) => {
          if (item.id === editId) {
            return { ...item, title: name };
          }
          return item;
        })
      );
      setName("");
      setIsEditing(false);
      setEditId(null);
      setAlert({ show: true, msg: "value changed", type: "success" });
    } else {
      //show alert
      setAlert({ show: true, msg: "item added to the list", type: "success" });
      const newItem = { id: new Date().getTime().toString(), title: name };
      setList([...list, newItem]);
      setName("");
    }
  };
  const clearlist = () => {
    setAlert({ show: true, msg: "empty list", type: "danger" });
    setList([]);
  };
  const removeItem = (id) => {
    const newList = list.filter((item) => item.id !== id);
    setAlert({ show: true, msg: "item removed", type: "danger" });
    setList(newList);
  };
  const editItem = (id) => {
    const item = list.find((item) => item.id === id);
    setIsEditing(true);
    setEditId(id);
    setName(item.title);
  };
  return (
    <section className="section-center">
      <form className="grocery-form" onSubmit={handleSubmit}>
        <Alert {...alert} removeAlert={setAlert} list={list} />
        <h3>grocery bud</h3>
        <div className="form-control">
          <input
            type="text"
            className="grocery"
            placeholder="e.g. eggs"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button type="submit" className="submit-btn">
            {isEditing ? "edit" : "submit"}
          </button>
        </div>
      </form>
      {list.length > 0 && (
        <div className="grocery-container">
          <List items={list} removeItem={removeItem} editItem={editItem} />
          <button className="clear-btn" onClick={clearlist}>
            clear items
          </button>
        </div>
      )}
    </section>
  );
}

export default App;
