import { Link, useOutletContext, useParams } from 'react-router-dom';
import styles from './Image.module.css';
import { useContext } from 'react';
import { ThemeContext } from '../providers/ThemeProvider';


export const Image = () => {
    
    const { id } = useParams();

    const gallery = useOutletContext();

    const selectedImage = gallery.find(img => id == img.id);
    
    // dodany useContext do zmiany motywu kolorystycznego
    const { theme } = useContext(ThemeContext);
    // dodane zmienne (stałe), które zamieniają kilka klas css na stringi; są wykorzystane jako warunkowe classNames 
    const productCardClasses = theme === 'Light' ? [styles.product__card, styles.product__cardlight].join(' ') : [styles.product__card, styles.product__cardDark].join(' ');    

    if (!selectedImage) {
        return <div>Loading...</div>;
    }

    return (
            <form className={productCardClasses}>
                <input type="image" alt={selectedImage.title} src={`/public/${selectedImage.src}`} className={styles.form__img}/>
                <div className={styles.form_card}>
                    <div className={styles.form_information}>
                        <Link to="/gallery"className={styles.form__closeBtn}>×</Link>
                        <h2 className={styles.form__title}>{selectedImage.title}</h2>
                        <p className={styles.form__price}>{`$${selectedImage.price}`}</p>
                        {(selectedImage.tags).map((tag) => (<span className={styles.form__hash} key={tag}>{`#${tag}`}</span>))}
                    </div>
                    <Link to="/gallery" className={styles.form__buy}>Add to basket</Link>
                </div>
            </form>
            );
};