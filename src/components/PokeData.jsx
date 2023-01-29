import React from 'react'

const PokeData = ({ selectedPokemon }) => {
  if (!selectedPokemon) return <p>...</p>

  const { id, name, sprites } = selectedPokemon

  return (
    <>
      <div>{id}</div>
      <div>{name}</div>
      <img src={sprites?.front_default} alt='Selected Pokemon' />
      <img src={sprites?.other?.dream_world.front_default} alt='Selected Pokemon' />
      <img src={sprites?.other?.home.front_default} alt='Selected Pokemon' />
    </>
  )
}

export default PokeData
