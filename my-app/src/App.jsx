// import './App.css'
import { LandingPage } from './LandingPage/LandingPage'
import { PricePanel } from './PricePanel/PricePanel'
import { Gallery } from './Gallery/Gallery'
import styles from './App.module.css'
import Form from './Form/Form'
import { Routes, Route, BrowserRouter, Navigate, Outlet } from 'react-router-dom'
import {Navigation} from './Navigation/Navigation'

function App() {

  return (
    <main className={styles.main}>
      
      <BrowserRouter>

        <Navigation />
        
        <Routes>
          <Route path="/" element={<><LandingPage/><PricePanel/><Form/></>}></Route>
          <Route path="/gallery" element ={<Gallery />}></Route>
        </Routes>
      </BrowserRouter>
    </main>

  )
}

export default App
