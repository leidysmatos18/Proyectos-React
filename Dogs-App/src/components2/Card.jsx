import React from "react";

const Card = ({ dog }) => {
  return (
    <div className="card">
      <img src={dog?.image.url} alt="dog" />
      <p className="parrafo1">{dog?.name}</p>
    </div>
  );
};

export default Card;
