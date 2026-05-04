import React from "react";

const Loading = ({ message = "Cargando..." }) => {
  return <div className="loading">{message}</div>;
};

export default Loading;
