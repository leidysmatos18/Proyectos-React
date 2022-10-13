const getDog = async () => {
  const url = "https://api.thedogapi.com/v1/breeds";
  const res = await fetch(url);
  const data = await res.json();

  const dogs = data.map((e) => {
    return {
      name: e.name,
      image: e.image,
      id: e.id,
    };
  });

  return dogs;
}

export default getDog;