import { Route } from 'react-router'
import LoginContainer from '../Login/'
import { CardsContainer } from './Cards'
import styles from './Main.module.scss'
import ProfileContainer from './Profile'

const Main = ({ setIsAuth }) => {
  return (
    <main className={styles.content}>
      {/* <img src={avatar.image} alt={avatar.alt} className={styles.image} /> */}
      <Route path="/Cards" component={CardsContainer} />
      <Route path="/Profile" component={ProfileContainer} />
      <Route path="/Login" component={LoginContainer} />
    </main>
  )
}
export default Main
