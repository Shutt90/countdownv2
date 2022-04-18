import React from 'react'

function Screen({value} : {value: number}) {
  return (
    <div className="screen">{value}</div>
  )
}

export default Screen