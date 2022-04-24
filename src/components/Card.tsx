import React from 'react'
import styles from '../css/Card.module.css'

export default function Card({value}: {value: number}) {
  return (
    <div onClick={function(e) {
      e.preventDefault();
      console.log(value)
    }} className={styles.container}>
        <h2 className={styles.value}>{value}</h2>
    </div>
  )
}
