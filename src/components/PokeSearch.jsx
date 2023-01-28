import React from 'react'
import UsePokeApi from '../Hooks/UsePokeApi';

const PokeSearch = ({ search, setSearch, setSelectedPokemon }) => {

  async function submit(event) {
    event.preventDefault()
    const pokemon = await UsePokeApi(search)
    setSelectedPokemon(pokemon)
  }

  return (
    <form onClick={submit}>
      <input className="bg-black rounded-xl py-1 px-2 mx-2 my-1 hover:border-red-600 border-2"
        value={search}
        onChange={({ target }) => setSearch(target.value)}>
      </input>
      <button className="bg-black rounded-xl py-1 px-2 mx-2 my-1 hover:border-red-600 border-2">Search</button>
    </form>
  )
}

export default PokeSearch