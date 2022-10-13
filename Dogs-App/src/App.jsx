import { useEffect, useState } from "react";
import Select from "./components/Select";
import Card from "./components/Card";
import fetchGetDog from "./helpers/fetchGetDog";

function App() {
  const [fetchListDog, setFetchListDog] = useState();
  const [onlyDog, setOnlyDog] = useState();

  useEffect(() => {
    handleRenderDog();
  }, []);

  const handleRenderDog = async () => {
    try {
      const listDogs = await fetchGetDog();
      setFetchListDog(listDogs);
      const id = generarIdRandom(listDogs);
      getOnlyDog(listDogs, id);
    } catch (error) {}
  };

  function generarIdRandom(listDogs) {
    const listIdDog = listDogs.map((item) => item.id);
    const randomNumber = Math.floor(Math.random() * listIdDog.length) - 1;
    const idDogRandom = listIdDog[randomNumber];

    return idDogRandom;
  }

  function getOnlyDog(listDogs, id) {
    console.log({ listDogs, id });
    let findDog = listDogs.find((dogFind) => dogFind.id === id);
    setOnlyDog(findDog);
  }

  return (
    <div className="app">
      <Select breeds={fetchListDog} getOnlyDog={getOnlyDog} />,
      <Card dog={onlyDog} />
      {/* <button onClick={() => handleRenderDog()}>Click</button> */}
    </div>
  );
}

export default App;
