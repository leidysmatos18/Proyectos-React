const getDogsData = async () => {
  const url = "https://api.thedogapi.com/v1/breeds";
  const res = await fetch(url);
  const data = await res.json()

  const dogs = data.map(e => {
    return {
      name: e.name,
      id: e.id,
      image: e.image
    }
  })

  return dogs
}

export default getDogsData;