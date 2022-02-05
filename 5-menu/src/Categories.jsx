import React from "react";

const Categories = ({ filteItems, categories }) => {
  const buttons = categories.map((category) => (
    <button
      key={category}
      className="filter-btn"
      onClick={() => filteItems(category)}
    >
      {category}
    </button>
  ));
  console.log(buttons);

  return (
    <div className="btn-container">
      <button className="filter-btn" onClick={() => filteItems()}>
        All
      </button>
      {buttons}
    </div>
  );
};

export default Categories;
