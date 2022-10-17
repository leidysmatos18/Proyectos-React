const getDataApi = async () => {
  const url = "https://api.thedogapi.com/v1/breeds";
  const res = await fetch(url);
  const data = await res.json()


  const dogs = data.map(dog => {
    return {
      id: dog.id,
      name: dog.name,
      image: dog.image
    }
  })

  return dogs
}

export default getDataApi;