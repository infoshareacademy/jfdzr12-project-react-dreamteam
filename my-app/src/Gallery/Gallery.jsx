import styles from './Gallery.module.css'

const gallery = [
  'img/bride-8182890_1280.jpg',
  'img/cat.jpg',
  'img/children-817365_1280.jpg',
  'img/examplephoto.jpg',
  'img/liberec-5285846_1280.jpg',
  'img/nature-3106213_1280.jpg',
  'img/park-7407081_1280.jpg',
  'img/woman-1509956_1280.jpg'
]

export const Gallery = () => {
  return (
    <section className={styles.examples__box}>
      {gallery.map((image) => { return <img src={image} key={image} className={styles.example__img} /> })}
    </section>
  )
}