import React from 'react'

const PokeImage = ({ sprites }) => {
  return (
    <div>
      {/* <img className='h-36 w-36 m-6' src={sprites?.other?.dream_world.front_default} alt='Selected Pokemon' /> */}
      <img className='h-80 w-80 m-6' src={sprites?.other?.home.front_default} alt='Selected Pokemon' />
    </div>
  )
}

export default PokeImage
