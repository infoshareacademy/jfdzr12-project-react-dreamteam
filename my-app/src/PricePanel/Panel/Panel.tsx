import styles from './Panel.module.css'

interface ProductProps{
  name: string;
  price: string;
  condition: string[]
}

export const Panel = (props: ProductProps) => {
  return (
    <div className={styles.box}>
      <h3 className={styles.box__name}>{props.name}</h3>
      <p className={styles.box__price}>{props.price}</p>
      <ul className={styles.box__offers}>
        {props.condition.map((element) => { return <li key={element} className={styles.offer__condition}>{element}</li> })}
      </ul>
    </div>
  )
}