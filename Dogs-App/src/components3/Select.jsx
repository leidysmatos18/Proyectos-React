import React from "react";

const Select = ({ dogs, getOnlyDog }) => {
  const getDogs = (id) => {
    const idNumber = Number(id);

    getOnlyDog(dogs, idNumber);
  };
  return (
    <div>
      {dogs && (
        <select onChange={(e) => getDogs(e.target.value)}>
          {dogs.map((dog) => {
            return (
              <option key={dog.id} value={dog.id}>
                {dog.name}
              </option>
            );
          })}
        </select>
      )}
    </div>
  );
};

export default Select;
