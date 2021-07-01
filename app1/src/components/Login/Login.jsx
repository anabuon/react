import styles from './Login.module.scss'
import lockImage from '../../assets/lock.svg'

const Login = ({
  handleSubmit,
  handleChange,
  handleBlur,
  loginData,
  isFill,
  isTouch,
}) => {
  return (
    <section className={styles.content}>
      <form onSubmit={handleSubmit} action="" className={styles.form}>
        <h2 className={styles.form__title}>Login</h2>
        <label
          className={`${styles.form_label} ${
            !isFill.login && isTouch.login && styles.form_label_error
          }`}
        >
          <img
            className={styles.form_label__image}
            src="https://i.pinimg.com/564x/38/c8/6a/38c86a20b6f1813687560df737def486.jpg"
            alt=""
          />
          <input
            placeholder="User Name"
            type="text"
            className={styles.form_label__input}
            value={loginData.login}
            data-name="login"
            onBlur={handleBlur}
            onChange={handleChange}
          />
        </label>
        <label
          className={`${styles.form_label} ${
            !isFill.password && isTouch.password && styles.form_label_error
          }`}
        >
          <img className={styles.form_label__image} src={lockImage} alt="" />
          <input
            placeholder={'Password'}
            type="password"
            className={styles.form_label__input}
            value={loginData.password}
            data-name="password"
            onBlur={handleBlur}
            onChange={handleChange}
          />
        </label>
        <button className={styles.form__button}>Login</button>
      </form>
    </section>
  )
}

export default Login
