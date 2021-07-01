import styles from './About.module.scss'

const About = ({ info }) => {
  return (
    <section className={styles.about}>
      <div className={styles.about_wrapper}>
        <h2 className={styles.about__title}>About Me</h2>
        <p className={styles.about__text}>{info}</p>
      </div>
    </section>
  )
}

export default About
