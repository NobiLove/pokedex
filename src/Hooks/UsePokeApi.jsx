import axios from "axios";

const UsePokeApi = async (pokemonName) => {
  const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
  return data
}

export default UsePokeApi