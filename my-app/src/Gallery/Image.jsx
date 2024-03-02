import { Link, useOutletContext, useParams } from 'react-router-dom';
import styles from './Image.module.css';
import { useContext } from 'react';
import { ThemeContext } from '../providers/ThemeProvider';


export const Image = () => {

    const { id } = useParams();

    const gallery = useOutletContext();

    const selectedImage = gallery.find(img => id == img.id);

    if (!selectedImage) {
        return <div>Loading...</div>;
    }

    // dodany useContext do zmiany motywu kolorystycznego
    const { theme } = useContext(ThemeContext);
    // dodane zmienne (stałe), które zamieniają kilka klas css na stringi; są wykorzystane jako warunkowe classNames
    const productCardLightClasses = [styles.product__card, styles.product__cardlight].join(' ');
    const productCardDarkClasses = [styles.product__card, styles.product__cardDark].join(' ');

    return (
        <form className={theme === 'Light' ? productCardLightClasses : productCardDarkClasses}>
            <input type="image" alt={selectedImage.title} src={`/public/&{selectedImage.src}`} className={styles.form__img} />
            <div className={styles.form_card}>
                <div className={styles.form_information}>
                    <Link to="/gallery" className={styles.form__closeBtn}>×</Link>
                    <h2 className={styles.form__title}>{selectedImage.title}</h2>
                    <p className={styles.form__price}>{`$${selectedImage.price}`}</p>
                    {/* KR: zmieniłam tahi na jedną listę w json i zmapowałam tagi oraz zakomentowałam stary zapis */}
                    {selectedImage.tag.map(el => { return <span key={el} className={styles.form__hash}>{`#${el}`}</span> })}
                    {/* <span className={styles.form__hash}>{`#${selectedImage.tag1}`}</span>
                    <span className={styles.form__hash}>{`#${selectedImage.tag2}`}</span>
                    <span className={styles.form__hash}>{`#${selectedImage.tag3}`}</span> */}
                </div>
                <Link to="/gallery" className={styles.form__buy}>Add to basket</Link>
            </div>
        </form>
    );
};