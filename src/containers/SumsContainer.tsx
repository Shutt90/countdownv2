import React from 'react'
import Button from '../components/Button'

function SumsContainer() {
  return (
    <div className="container">
        <Button content="+"/>
        <Button content="-"/>
        <Button content="*"/>
        <Button content="/"/>
    </div>
  )
}

export default SumsContainer