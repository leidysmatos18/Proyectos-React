import React, { useEffect, useState } from "react";
import Card from "./components4/Card";
import Select from "./components4/Select";
import getDataApi from "./helpers4/getDataApi";

const App4 = () => {
  const [dogsFetch, setDogsFetch] = useState();
  const [onlyDog, setonlyDog] = useState();

  useEffect(() => {
    getDogsData();
  }, []);

  const getDogsData = async () => {
    try {
      const listDogs = await getDataApi();
      setDogsFetch(listDogs);
      const getRandomId = createRandomId(listDogs);
      getOnlyDog(listDogs, getRandomId);
    } catch (error) {}
  };

  const createRandomId = (listDogs) => {
    const listIdDogs = listDogs.map((e) => e.id);
    const randomNumber = Math.floor(Math.random() * listIdDogs.length) - 1;
    const idRandom = listIdDogs[randomNumber];

    return idRandom;
  };

  const getOnlyDog = (listDogs, getRandomId) => {
    const findOnlyDog = listDogs.find((dog) => dog.id === getRandomId);

    setonlyDog(findOnlyDog);
  };

  return (
    <div className="app">
      <Select listDogsApi={dogsFetch} getOnlyDog={getOnlyDog} />,
      <Card onlyDog={onlyDog} />
    </div>
  );
};

export default App4;
