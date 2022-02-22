import { useState } from "react";
import Values from "values.js";
import SingleColor from "./SingleColor";
function App() {
  const [color, setColor] = useState("");
  const [error, setError] = useState(false);
  const [list, setList] = useState(new Values("#f15025").all(10));
  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      let colors = new Values(color).all(10);
      setError(false);
      setList(colors);
    } catch (error) {
      console.log(error);
      setError(true);
    }
  };
  return (
    <>
      <section className="container">
        <h2>color generator</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            id="color"
            value={color}
            placeholder="#f15025"
            onChange={(e) => setColor(e.target.value)}
            className={`${error && "error"}`}
          />
          <button className="btn" type="submit">
            submit
          </button>
        </form>
      </section>
      <section className="colors">
        {list.map((color, index) => (
          <SingleColor key={index} {...color} index={index} />
        ))}
      </section>
    </>
  );
}

export default App;
