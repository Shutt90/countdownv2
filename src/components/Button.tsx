import React from 'react'
import styles from '../css/Button.module.css';

function Button({content} : {content: string}) {
  return (
    <button className={styles.button}>{content}</button>
  )
}

export default Button