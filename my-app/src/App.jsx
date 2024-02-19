// import './App.css'
import { LandingPage } from './LandingPage/LandingPage'
import { PricePanel } from './PricePanel/PricePanel'
import { Gallery } from './Gallery/Gallery'
import { Image } from './Gallery/Image'
import styles from './App.module.css'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import {Navigation} from './Navigation/Navigation'
import { NotFound } from './NotFound/NotFound'
import React from 'react'
import ContactForm from './Form/Form'

function App() {

  return (
      <main className={styles.main}>
        <BrowserRouter>
          <Navigation />
          <Routes>
            <Route path="/" element={<LandingPage/>} />
            <Route path="/gallery/*" element ={<Gallery />}>
              <Route path=":id" element={<Image/>}/>
            </Route>
            <Route path="/pricing" element ={<PricePanel/>}/>
            <Route path="/contactform" element ={<ContactForm/>}/>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </main>
  )
}

export default App
