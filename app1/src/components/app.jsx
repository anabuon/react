import { useSelector } from 'react-redux'
import { Redirect } from 'react-router'
import styles from './App.module.scss'
import { Footer } from './Footer'
import { Header } from './Header'
import { Main } from './Main'

const App = () => {
  const auth = useSelector((state) => state.auth)

  return (
    <div className={styles.content}>
      {!auth.isAuth && <Redirect to="/Login" />}
      <Header isAuth={auth.isAuth} />
      <Main />
      <Footer isAuth={auth.isAuth} />
    </div>
  )
}

export default App
