import styles from './Header.module.css'
import React from 'react'

export default function Header({ user }) {
  return (
    <header>
      <h1>
        {user.firstName} {user.lastName}
      </h1>
    </header>
  )
}
