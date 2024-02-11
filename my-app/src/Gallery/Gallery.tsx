import { useEffect, useState } from 'react';
import styles from './Gallery.module.css';
import { Outlet, useNavigate } from 'react-router-dom';

interface GaleryDetail{
  id: string,
  src: string
}

export const Gallery = () => {

  const [gallery, setGallery] = useState<GaleryDetail[]>([]);
  // dodane useNavigate
  const navigate = useNavigate();

  useEffect(() => {
      fetch("/photos.json")
      .then(res => {
        if(!res.ok) {
          throw new Error("Error")
        }
        return res.json();
      })
      .then(gallery => {console.log('Loaded gallery data:', gallery); setGallery(gallery)})
      .catch(error => console.error(error))
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
    <>
    {gallery && (
    <section className={styles.examples__box}>
      {/* dodana funkcja ocClick z nawigowaniem */}
      {gallery.map((image) => (<img src={image.src} key={image.id} className={styles.example__img} onClick={() => navigate(`${image.id}`)}/>))}
      <div>
        <Outlet context={gallery}/>
      </div>
    </section>
    )}
    </>
  );  
}