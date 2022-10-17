import React from "react";

const Card = ({ onlyDog }) => {
  return (
    <div className="card">
      <img src={onlyDog?.image.url} alt="Dog" />
      <p>{onlyDog?.name}</p>
    </div>
  );
};

export default Card;
