import { useContext } from 'react';
import styles from './Panel.module.css'
import { ThemeContext } from '../../providers/ThemeProvider'

interface ProductProps{
  name: string;
  price: string;
  condition: string[]
}

export const Panel = (props: ProductProps) => {

  // dodany useContext do zmiany kolorystyki i zmienne (stałe), które zamieniają kilka klas css na stringi; są wykorzystane jako warunkowe classNames 

  const { theme } = useContext(ThemeContext);

  const boxDarkClasses = [styles.box, styles.boxDark].join(' ');
  const boxLightClasses = [styles.box, styles.boxLight].join(' ');
  const boxNameLightClasses =[styles.box__name, styles.box__nameLight].join(' ');
  const boxNameDarkClasses =[styles.box__name, styles.box__nameDark].join(' ');
  const boxPriceLightClasses =[styles.box__price, styles.box__priceLight].join(' ');
  const boxPriceDarkClasses =[styles.box__price, styles.box__priceDark].join(' ');


  return (
    <div className={theme === 'Light' ? boxLightClasses : boxDarkClasses}>
      <h3 className={theme === 'Light' ? boxNameLightClasses : boxNameDarkClasses}>{props.name}</h3>
      <p className={theme === 'Light' ? boxPriceLightClasses : boxPriceDarkClasses}>{props.price}</p>
      <ul className={styles.box__offers}>
        {props.condition.map((element) => { return <li key={element} className={styles.offer__condition}>{element}</li> })}
      </ul>
    </div>
  )
}