import styles from './Main.module.css'
import React from 'react'

export default function Main({ avatar }) {
  return (
    <main className={styles.content}>
      <img src={avatar.image} alt={avatar.alt} />
    </main>
  )
}
