import axios from 'axios'

const UsePokeApi = async (pokemonName) => {
  const formatedName = pokemonName.toLowerCase()
  const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${formatedName}`)
  return data
}

export default UsePokeApi
