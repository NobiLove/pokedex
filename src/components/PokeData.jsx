import React from 'react'

const PokeData = ({ selectedPokemon }) => {
  if (!selectedPokemon) return null

  const { id, name, sprites } = selectedPokemon

  return (
    <>
      <div>{id}</div>
      <div>{name}</div>
      <img src={sprites?.front_default} alt="Selected Pokemon" />
    </>
  )
}

export default PokeData