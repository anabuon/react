import styles from './card.module.scss'

const Card = (props) => {
  return (
    <li className={styles.item}>
      <img className={styles.image} src={props.image} alt="image" />
      <button
        className={styles.cross}
        data-name="cross"
        data-id={props.id}
      ></button>
      <div className={styles.description}>
        <h2 className={styles.title}>{props.title}</h2>
        <span className={styles.gender}>Gender: {props.gender}</span>
        <span className={styles.age}>Age: {props.age}</span>
      </div>
    </li>
  )
}
export default Card
