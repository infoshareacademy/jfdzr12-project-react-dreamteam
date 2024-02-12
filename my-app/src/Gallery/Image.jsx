import { Link, NavLink, useOutletContext, useParams } from 'react-router-dom';
import styles from './Image.module.css';


export const Image = () => {
    
    const { id } = useParams();

    const gallery = useOutletContext();

    const selectedImage = gallery.find(img => id == img.id);

    if (!selectedImage) {
        return <div>Loading...</div>;
    }

    return (
            <form className={styles.product__card}>
                <input type="image" alt={selectedImage.title} src={`/public/${selectedImage.src}`} className={styles.form__img}/>
                <div className={styles.form_card}>
                    <div className={styles.form_information}>
                        <Link to="/gallery"className={styles.form__closeBtn}>×</Link>
                        <h2 className={styles.form__title}>{selectedImage.title}</h2>
                        <p className={styles.form__price}>{`$${selectedImage.price}`}</p>
                        <span className={styles.form__hash}>{`#${selectedImage.tag1}`}</span>
                        <span className={styles.form__hash}>{`#${selectedImage.tag2}`}</span>
                        <span className={styles.form__hash}>{`#${selectedImage.tag3}`}</span>
                    </div>
                    <Link to="/gallery" className={styles.form__buy}>Add to basket</Link>
                </div>
            </form>
            );
};