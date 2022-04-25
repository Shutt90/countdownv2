import React from 'react'
import styles from '../css/Card.module.css'

export default function Card({value, onClick}: {value: number, onClick: (e: any) => any}) {
  return (
    <div onClick={onClick} className={styles.container}>
        <h2 className={styles.value}>{value}</h2>
    </div>
  )
}
