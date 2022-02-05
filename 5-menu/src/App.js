import { useState } from "react";
import Categories from "./Categories";
import items from "./data";
import Menu from "./Menu";
function App() {
  const [menuItems, setMenuItems] = useState(items);
  const categoriesSet = new Set(items.map((item) => item.category));
  const allCategories = [...categoriesSet];
  const [categories, setCategories] = useState(allCategories);
  const filteItems = (category) => {
    if (!category) {
      return setMenuItems(items);
    }
    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems);
    console.log("category changed");
  };
  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>our menu</h2>
          <div className="underline"></div>
        </div>
        <Categories filteItems={filteItems} categories={categories} />
        <Menu items={menuItems} />
      </section>
    </main>
  );
}

export default App;
