import React from 'react'
import PokeImage from './PokeImage'
import Stat from './Stat'
import Image from './Image'
import { formatText } from '../utils/util'
import ghost from '../images/ghost.gif'
import { PokeList } from './PokeList'

const PokeData = ({ selectedPokemon, setSelectedPokemon }) => {
  const { id, name, sprites, stats } = selectedPokemon
  const formatedName = formatText(name)
  if (!selectedPokemon.id) {
    return (
      <div className='flex flex-wrap place-content-between'>
        <Image src={ghost} alt='no pokemon selected' />
        <PokeList setSelectedPokemon={setSelectedPokemon} />
      </div>
    )
  }

  return (
    <div className='flex flex-wrap place-content-between'>
      <div className=''>
        <PokeImage sprites={sprites} />
      </div>
      <div className=''>
        <p className='my-2 font-thin text-5xl'>Nº {id}</p>
        <p className='my-2 font-thin text-3xl'>Name: {formatedName}</p>
        <div className='my-2 p-2 border-2 rounded-md border-neutral-500 bg-slate-600'>
          <p className='my-2 font-thin text-3xl'>Stats</p>
          {stats?.map((stat) =>
            <Stat key={stat.stat.url} stat={stat} />
          )}
        </div>
      </div>
      <PokeList setSelectedPokemon={setSelectedPokemon} />
    </div>
  )
}

export default PokeData
