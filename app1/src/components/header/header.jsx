import styles from './Header.module.scss'
import HeaderNav from './Header-nav'

const Header = ({ isAuth }) => {
  return (
    <header className={styles.content}>
      <div className={styles.content__wrapper} />
      <HeaderNav isAuth={isAuth} />
    </header>
  )
}
export default Header
