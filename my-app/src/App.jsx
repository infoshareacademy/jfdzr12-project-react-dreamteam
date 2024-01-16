// import './App.css'
import { LandingPage } from './LandingPage/LandingPage'
import { PricePanel } from './PricePanel/PricePanel'
import { Gallery } from './Gallery/Gallery'
import styles from './App.module.css'

function App() {

  return (
    <main className={styles.main}>
      <LandingPage />
      <Gallery />
      <PricePanel />
    </main>

  )
}

export default App
