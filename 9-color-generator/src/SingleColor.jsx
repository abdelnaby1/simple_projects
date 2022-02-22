import { useEffect, useState } from "react";
import rgbToHex from "./utils";
const SingleColor = ({ rgb, weight, index }) => {
  const [alert, setAlert] = useState(false);
  const bcg = rgb.join(",");
  const hexValue = rgbToHex(...rgb);
  const copyToCliboard = () => {
    setAlert(true);
    navigator.clipboard.writeText(hexValue);
  };
  useEffect(() => {
    const timeOut = setTimeout(() => {
      setAlert(false);
    }, 2000);
    return () => {
      clearTimeout(timeOut);
    };
  }, [alert]);
  return (
    <article
      className={`color ${index > 10 && "color-light"}`}
      style={{ backgroundColor: `rgb(${bcg})` }}
      onClick={copyToCliboard}
    >
      <p className="percent-value">{weight}%</p>
      <p className="color-value">{hexValue}</p>
      {alert && <p className="alert">copies to clipboard</p>}
    </article>
  );
};

export default SingleColor;
