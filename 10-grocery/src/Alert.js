import React, { useEffect } from "react";

const Alert = ({ show, type, msg, removeAlert, list }) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      removeAlert({ show: false, msg: "", type: "" });
    }, 2000);
    return () => {
      clearTimeout(timeout);
    };
  }, [list]);
  return (
    <div className={`alert alert-${type} ${show && "alertShow"}`}>{msg}</div>
  );
};

export default Alert;
