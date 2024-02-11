// import './App.css'
import { LandingPage } from './LandingPage/LandingPage'
import { PricePanel } from './PricePanel/PricePanel'
import { Gallery } from './Gallery/Gallery'
import { Image } from './Gallery/Image'
import styles from './App.module.css'
import Form from './Form/Form'
import { Routes, Route, BrowserRouter, Navigate, Outlet } from 'react-router-dom'
import {Navigation} from './Navigation/Navigation'
import { NotFound } from './NotFound/NotFound'

function App() {

  return (
    <main className={styles.main}>
      
      <BrowserRouter>

        <Navigation />
        <Routes>
          <Route path="/" element={<LandingPage/>} />
          <Route path="/gallery/*" element ={<Gallery />}>
            {/* dynamiczna ścieżka do wyświetlania pojedynczego zdjęcia - zmienia się url po kliknięciu, w konsoli wyświetla się src klikniętego zdjęcia a na dole strony z galerią, a na dole strony pojawia się element img, ale nie ma zdjęcia */}
              <Route path=":id" element={<Image/>}/>
          </Route>
          <Route path="/pricing" element ={<PricePanel/>}/>
          <Route path="/contactform" element ={<Form/>}/>
          {/* ścieżka do obsługi błędów nawigacji */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </main>

  )
}

export default App
