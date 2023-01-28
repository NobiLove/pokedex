import axios from "axios";
import { useEffect, useState } from "react";

export default function App() {
  const [search, setSearch] = useState('bulbasaur')
  const [selectedPokemon, setSelectedPokemon] = useState({})

  useEffect(() => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${search}`)
      .then(function (response) {
        setSelectedPokemon(response.data)
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      })
  }, [])

  function submit(event) {
    event.preventDefault()
    axios.get(`https://pokeapi.co/api/v2/pokemon/${search}`)
      .then(function (response) {
        setSelectedPokemon(response.data)
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      })
  }

  return (
    <div className="bg-zinc-900 text-white h-screen w-screen">
      <div className="py-3 px-3">
        <form className="inline-flex" onClick={submit}>
          <input className="bg-black rounded-xl py-1 px-2 mx-2 hover:border-red-600 border-2" value={search} onChange={({ target }) => setSearch(target.value)}></input>
          <button className="bg-black rounded-xl py-1 px-2 hover:border-red-600 border-2" >
            Search
          </button>
        </form>
      </div>
      <div>
        <label className="px-2">Nº {selectedPokemon?.id}</label>
        <label className="px-2"> {selectedPokemon?.name}</label>
        <img src={selectedPokemon?.sprites?.front_default} alt="Selected Pokemon" />
      </div>
    </div>
  )
}