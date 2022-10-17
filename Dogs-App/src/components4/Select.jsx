import React from "react";

const Select = ({ listDogsApi, getOnlyDog }) => {
  const updateDataDog = (id) => {
    const numberId = Number(id);

    getOnlyDog(listDogsApi, numberId);
  };
  return (
    <div>
      {listDogsApi && (
        <select onChange={(e) => updateDataDog(e.target.value)}>
          {listDogsApi.map((dog) => (
            <option key={dog.id} value={dog.id}>
              {dog.name}
            </option>
          ))}
        </select>
      )}
    </div>
  );
};

export default Select;
