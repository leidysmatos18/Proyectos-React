const getDogsFetch = async () => {
  const url = "https://api.thedogapi.com/v1/breeds";
  const res = await fetch(url)
  const data = await res.json();

  const dogs = data.map(e => {
    return {
      id: e.id,
      name: e.name,
      image: e.image
    }
  })

  return dogs
}

export default getDogsFetch;