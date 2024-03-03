import { useContext } from 'react';
import styles from './Panel.module.css'
import { ThemeContext } from '../../providers/ThemeProvider'

interface ProductProps {
  name: string;
  price: string;
  condition: string[]
}

export const Panel = (props: ProductProps) => {

  // dodany useContext do zmiany kolorystyki i zmienne (stałe), które zamieniają kilka klas css na stringi; są wykorzystane jako warunkowe classNames 

  const { theme } = useContext(ThemeContext);

  const boxDarkClasses = [styles.box, styles.boxDark].join(' ');
  const boxLightClasses = [styles.box, styles.boxLight].join(' ');
  const boxNameLightClasses = [styles.box__name, styles.box__nameLight].join(' ');
  const boxNameDarkClasses = [styles.box__name, styles.box__nameDark].join(' ');
  const boxOfferLightClasses = [styles.box__offers, styles.box__offersLight].join(' ');
  const boxOfferDarkClasses = [styles.box__offers, styles.box__offersDark].join(' ');


  return (
    <div className={theme === 'Light' ? boxLightClasses : boxDarkClasses}>
      <h3 className={theme === 'Light' ? boxNameLightClasses : boxNameDarkClasses}>{props.name}</h3>
      <p className={styles.box__price}>{props.price}</p>
      <ul className={styles.box__offers}>
        {props.condition.map((element) => { return <li key={element} className={theme === 'Light' ? boxOfferLightClasses : boxOfferDarkClasses}>{element}</li> })}
      </ul>
    </div>
  )
}