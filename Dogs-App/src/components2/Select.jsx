const Select = ({ dogsList, FindOnlyDog }) => {
  const getDogSelect = (id) => {
    const idNumber = Number(id);
    FindOnlyDog(dogsList, idNumber);
  };

  return (
    <div>
      {dogsList && (
        <select onChange={(e) => getDogSelect(e.target.value)}>
          {dogsList?.map((dog) => (
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
