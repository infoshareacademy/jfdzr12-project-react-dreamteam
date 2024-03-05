import { Link, useOutletContext, useParams } from 'react-router-dom';
import styles from './Image.module.css';
import { useContext } from 'react';
import { ThemeContext } from '../providers/ThemeProvider';



export const Image = () => {

	const { id } = useParams();

	const gallery = useOutletContext();

	const selectedImage = gallery.find(img => id == img.id);

	const { theme } = useContext(ThemeContext);

	const productCardClasses = theme === 'Light' ? [styles.product__card, styles.product__cardlight].join(' ') : [styles.product__card, styles.product__cardDark].join(' ');

	if (!selectedImage) {
		return <div>Loading...</div>;
	}

	return (
		<section className={styles.product__background}>
			<form className={productCardClasses}>
				<input type="image" alt={selectedImage.title} src={`/img/${selectedImage.src}`} className={styles.form__img} />
				<div className={styles.form_card}>
					<div className={styles.form_information}>
						<Link to="/gallery" className={styles.form__closeBtn}><i className="fa-solid fa-xmark"></i></Link>
						<h2 className={styles.form__title}>{selectedImage.title}</h2>
						<p className={styles.form__price}>{`$${selectedImage.price}`}</p>
						{/* KR: zmieniłam tahi na jedną listę w json i zmapowałam tagi oraz zakomentowałam stary zapis */}
						{selectedImage.tag.map(el => { return <span key={el} className={styles.form__hash}>{`#${el}`}</span> })}
					</div>
					<Link to="/gallery" className={styles.form__buy}>Add to basket</Link>
				</div>
			</form>
		</section>
	);
};