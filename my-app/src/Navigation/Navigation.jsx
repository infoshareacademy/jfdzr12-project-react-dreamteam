import { NavLink } from 'react-router-dom'
export const Navigation = () => {
    return (
        <nav className="navigation-header">
            <div className="app-logo"></div>
            <NavLink className='menu-item' to='/'>Home</NavLink>
            <NavLink className='menu-item' to='/gallery'>Gallery</NavLink>
            <NavLink className='menu-item' to='/pricing'>Pricing</NavLink>
            <NavLink className='menu-item' to='/contactform'>Contact</NavLink>
        </nav>
    )
}

{/* <NavLink
end
className={({ isActive, isPending }) =>
  isActive ?"menu-item menu-item__active" : "menu-item"
  } to="/" >
   Home
 </NavLink> */}

{/* <header class="header"> 
      <div class="header__top">
        <div class="header__box">
          <a href="#Top" class="nav__logo">
            <img class="header__img" src="img/FOTO_TOTO.png" alt="logo"
          /></a>
          <nav class="header__nav">
            <ul class="nav__items">
              <li class="nav__item">
                <a href="#Example" class="nav__link">Examples</a>
              </li>
              <li class="nav__item">
                <a href="#Pricing" class="nav__link">Pricing</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header> */}