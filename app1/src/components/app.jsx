import { useState } from 'react'
import { Redirect } from 'react-router'
import styles from './App.module.scss'
import { Footer } from './Footer'
import { Header } from './Header'
import { Main } from './Main'
const App = ({ data }) => {
  const [isAuth, setIsAuth] = useState(false)

  return (
    <div className={styles.content}>
      {!isAuth && <Redirect to="/Login" />}
      <Header userData={data.user} isAuth={isAuth} />
      <Main avatar={data.avatar} setIsAuth={setIsAuth} />
      <Footer isAuth={isAuth} />
    </div>
  )
}

export default App
