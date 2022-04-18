import React from 'react'
import styles from '../css/Button.module.css';

function Button(props: any) {
  return (
    <button onClick={props.onClick} className={styles.button}>{props.content}</button>
  )
}

export default Button