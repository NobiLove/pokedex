import { useEffect, useState } from 'react'
import PokeData from './components/PokeData'
import PokeSearch from './components/PokeSearch'
import UsePokeApi from './Hooks/UsePokeApi'

export default function App () {
  const [selectedPokemon, setSelectedPokemon] = useState({})

  useEffect(() => {
    async function fetchData () {
      const pokemon = await UsePokeApi('bulbasaur')
      setSelectedPokemon(pokemon)
    }
    fetchData()
  }, [])

  return (
    <div className='bg-zinc-900 text-white h-screen w-screen'>
      <nav className='py-3 px-3 flex place-content-between items-center'>
        <PokeSearch setSelectedPokemon={setSelectedPokemon} />
        <a href='https://www.pokemon.com/el/jcc-pokemon/jugar-en-linea'>
          <img src='https://img.icons8.com/color/96/null/pokeball-2.png' />
        </a>
      </nav>
      <article>
        <PokeData selectedPokemon={selectedPokemon} />
      </article>
    </div>
  )
}
