import React from 'react'

const PokeData = ({ selectedPokemon }) => {
  if (!selectedPokemon) return <p>...</p>

  const { id, name, sprites, stats } = selectedPokemon

  return (
    <div className='flex flex-wrap'>
      <div>
        <img className='h-36 w-36' src={sprites?.other?.dream_world.front_default} alt='Selected Pokemon' />
      </div>
      <div>
        <p>Nº {id}</p>
        <p>Nombre: {name}</p>
        <p className='border-2'>Estadisticas {stats?.map((m) => {
          return (<p key={m.stat.url}>{m.stat.name}: {m.base_stat}</p>)
        })}
        </p>
      </div>
    </div>
  )
}

export default PokeData
