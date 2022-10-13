const Select = ({ breeds, getOnlyDog }) => {
  const selecPets = (id) => {
    const idn = Number(id);
    getOnlyDog(breeds, idn);
  };

  return (
    <div>
      {breeds && (
        <select onChange={(e) => selecPets(e.target.value)}>
          {breeds.map((breed) => (
            <option key={breed?.id} value={breed?.id}>
              {breed?.name}
            </option>
          ))}
          ,
        </select>
      )}
    </div>
  );
};

export default Select;
