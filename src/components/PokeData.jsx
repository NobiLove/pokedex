import React from 'react'
import Stat from './Stat'

const PokeData = ({ selectedPokemon }) => {
  if (!selectedPokemon) return <p>...</p>

  const { id, name, sprites, stats } = selectedPokemon

  return (
    <div className='flex flex-wrap'>
      <div>
        <img className='h-36 w-36 m-6' src={sprites?.other?.dream_world.front_default} alt='Selected Pokemon' />
      </div>
      <div>
        <p className='my-2'>Nº {id}</p>
        <p className='my-2'>Nombre: {name}</p>
        <p className='my-2 p-2 border-2 '>Estadisticas {stats?.map((obj) => {
          return <Stat key={obj.stat.url} stat={obj} />
        })}
        </p>
      </div>
    </div>
  )
}

export default PokeData
