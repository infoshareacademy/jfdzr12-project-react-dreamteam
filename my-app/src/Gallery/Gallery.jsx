import { useEffect, useState } from 'react';
import styles from './Gallery.module.css';


export const Gallery = () => {

  const [gallery, setGallery] = useState([]);

  useEffect(() => {
    const fetchData = () => {
      fetch("./photos.json")
      .then(res => {
        if(!res.ok) {
          throw new Error("Error")
        }
        return res.json();
      })
      .then(gallery => {setGallery(gallery)})
      .catch(error => console.error(error))
    };

    fetchData();
  }, []);

  // useEffect(() => {
  //   const fetchData = () => {
  //     fetch('/photos.json')
  //       .then((response) => {
  //         if (!response.ok) {
  //           throw new Error(`HTTP error! Status: ${response.status}`);
  //         }
  //         return response.json();
  //       })
  //       .then((data) => {
  //         setGallery(data);
  //       })
  //       .catch((error) => {
  //         console.error('Error fetching data:', error);
  //       });
  //   };
  //   fetchData();
  // }, []);

  return (
    <section className={styles.examples__box}>
      {gallery.map((image) => { return <img src={image.src} key={image} className={styles.example__img} /> })}
    </section>
  )
}