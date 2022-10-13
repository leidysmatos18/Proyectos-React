import React from "react";

const Card = ({ dog }) => {
  return (
    <div className="card">
      <img src={dog?.image.url} alt="Dog" />
      <p>{dog?.name}</p>
    </div>
  );
};

export default Card;
