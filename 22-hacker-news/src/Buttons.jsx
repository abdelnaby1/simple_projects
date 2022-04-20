import React from "react";
import { useGlobalContext } from "./context";

const Buttons = () => {
  const { isLoading, page, nbPages, handlePage } = useGlobalContext();

  return (
    <div className="btn-container">
      <button
        disabled={isLoading}
        className="btn-prev"
        onClick={() => handlePage("dec")}
      >
        prev
      </button>
      <p>
        {page + 1} of {nbPages}
      </p>
      <button
        disabled={isLoading}
        className="btn-next"
        onClick={() => handlePage("inc")}
      >
        prev
      </button>
    </div>
  );
};

export default Buttons;
