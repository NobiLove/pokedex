import React from 'react'
import PokeImage from './PokeImage'
import Stat from './Stat'
import { formatText } from '../utils/util'

const PokeData = ({ selectedPokemon }) => {
  if (!selectedPokemon.id) return (<> !!! </>)

  const { id, name, sprites, stats } = selectedPokemon
  const formatedName = formatText(name)

  return (
    <div className='flex flex-wrap'>
      <PokeImage sprites={sprites} />
      <div>
        <p className='my-2 font-thin text-5xl'>Nº {id}</p>
        <p className='my-2 font-thin text-3xl'>Name: {formatedName}</p>
        <div className='my-2 p-2 border-2 rounded-md border-neutral-500'>
          <p className='my-2 font-thin text-3xl'>Stats</p>
          {stats?.map((stat) =>
            <Stat key={stat.stat.url} stat={stat} />
          )}
        </div>
      </div>
    </div>
  )
}

export default PokeData
