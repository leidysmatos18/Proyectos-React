import React, { useEffect, useState } from "react";
import Card from "./components3/Card";
import Select from "./components3/Select";
import getDogsFetch from "./helpers3/getDogsFetch";

const App3 = () => {
  const [dogFetch, setDogFetch] = useState();
  const [onlyDog, setOnlyDog] = useState();

  useEffect(() => {
    getDataDogsFect();
  }, []);

  const getDataDogsFect = async () => {
    try {
      const getDataDogs = await getDogsFetch();
      setDogFetch(getDataDogs);
      const id = createRandomNumber(getDataDogs);
      getOnlyDog(getDataDogs, id);
    } catch (error) {}
  };

  const createRandomNumber = (getDataDogs) => {
    const listDogs = getDataDogs.map((item) => item.id);
    const randomNumber = Math.floor(Math.random() * listDogs.length) - 1;
    const id = listDogs[randomNumber];

    return id;
  };

  const getOnlyDog = (getDataDogs, id) => {
    const onlyDog = getDataDogs.find((dog) => dog.id === id);

    setOnlyDog(onlyDog);
  };

  return (
    <div className="app">
      <Select dogs={dogFetch} getOnlyDog={getOnlyDog} />,
      <Card onlyDog={onlyDog} />
    </div>
  );
};

export default App3;
