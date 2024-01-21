// import './App.css'
import { LandingPage } from './LandingPage/LandingPage'
import { PricePanel } from './PricePanel/PricePanel'
import { Gallery } from './Gallery/Gallery'
import styles from './App.module.css'
import Form from './Form/Form'


function App() {

  return (
    <main className={styles.main}>
      <LandingPage />
      <Gallery />
      <PricePanel />
      <Form />
    </main>

  )
}

export default App
