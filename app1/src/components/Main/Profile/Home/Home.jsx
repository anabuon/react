import styles from './Home.module.scss'
// import avatar from 'https://i.pinimg.com/564x/38/c8/6a/38c86a20b6f1813687560df737def486.jpg'

const Home = ({ fullName, position }) => {
  return (
    <section className={styles.home}>
      <div className={styles.home_info}>
        <img
          src="https://i.pinimg.com/564x/17/72/08/177208390edaa046b85abdcd1c358b0c.jpg"
          alt=""
          className={styles.home_info__avatar}
        />
        <span className={styles.home_info__fullname}>{fullName}</span>
        <span className={styles.home_info__position}>{position}</span>
      </div>
    </section>
  )
}
export default Home
