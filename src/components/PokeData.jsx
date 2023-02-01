import React from 'react'
import PokeImage from './PokeImage'
import Stat from './Stat'

const PokeData = ({ selectedPokemon }) => {
  if (!selectedPokemon) return <p>...</p>

  const { id, name, sprites, stats } = selectedPokemon

  return (
    <div className='flex flex-wrap'>
      <PokeImage sprites={sprites} />
      <div>
        <p className='my-2'>Nº {id}</p>
        <p className='my-2'>Name: {name}</p>
        <div className='my-2 p-2 border-2 rounded-md border-neutral-500'>Stats {stats?.map((obj) => {
          return <Stat key={obj.stat.url} stat={obj} />
        })}
        </div>
      </div>
    </div>
  )
}

export default PokeData
