import React, { useEffect, useState } from "react";
import Card from "./components2/Card";
import Select from "./components2/Select";
import getDogsData from "./helpers2/getDogs";

const App2 = () => {
  const [getDogs, setGetDogs] = useState();
  const [onlyDog, setOnlyDog] = useState();

  useEffect(() => {
    updateDogs();
  }, []);

  const updateDogs = async () => {
    try {
      const listDogs = await getDogsData();
      setGetDogs(listDogs);
      const id = generarIdRandom(listDogs);
      FindOnlyDog(listDogs, id);
    } catch (error) {}
  };

  const generarIdRandom = (listDogs) => {
    const listId = listDogs.map((item) => item.id);
    const randomNumber = Math.floor(Math.random() * listId.length) - 1;
    const idRandomDog = listId[randomNumber];
    // console.log(idRandomDog);

    return idRandomDog;
  };

  const FindOnlyDog = (listDogs, id) => {
    const getOnlyDog = listDogs.find((dog) => dog.id === id);
    setOnlyDog(getOnlyDog);
    // console.log(getOnlyDog);
  };

  return (
    <div className="app">
      <Select dogsList={getDogs} FindOnlyDog={FindOnlyDog} />
      <Card dog={onlyDog} />
    </div>
  );
};

export default App2;
