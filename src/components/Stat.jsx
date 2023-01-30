import React from 'react'

const Stat = ({ stat }) => {
  return (
    <p>{stat.stat.name}: {stat.base_stat}</p>
  )
}

export default Stat
