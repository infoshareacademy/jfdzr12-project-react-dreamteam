import { useEffect, useState } from 'react';
import styles from './Gallery.module.css';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';


export const Gallery = () => {

  const [gallery, setGallery] = useState([]);
  // dodane useNavigate
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = () => {
      fetch("/photos.json")
      .then(res => {
        if(!res.ok) {
          throw new Error("Error")
        }
        return res.json();
      })
      .then(gallery => {console.log('Loaded gallery data:', gallery); setGallery(gallery)})
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
      {/* dodana funkcja ocClick z nawigowaniem */}
      {gallery.map((image) => (<img src={image.src} key={image.id} className={styles.example__img} onClick={() => navigate(`${image.id}`)}/>))}
      <div>
        <Outlet context={gallery}/>
      </div>
    </section>
  )
}