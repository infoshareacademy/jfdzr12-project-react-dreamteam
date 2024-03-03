// import './App.css'
import { LandingPage } from './LandingPage/LandingPage'
import { PricePanel } from './PricePanel/PricePanel'
import { Gallery } from './Gallery/Gallery'
import { Image } from './Gallery/Image'
import styles from './App.module.css'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { Navigation } from './Navigation/Navigation'
import { NotFound } from './NotFound/NotFound'
import { ThemeProvider } from './providers/ThemeProvider'
import ContactForm from './Form/ContactForm'
import { SignIn } from './auth/SignIn'
import { Auth } from './auth/Auth'
import { auth } from './api/firebase'
import { useState } from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import { SignUp } from './auth/SignUp'
import { Navigate } from 'react-router-dom'

function App() {
  const [user, setUser] = useState(null)

  onAuthStateChanged(auth, (res) => {
    setUser(res)
  })

  return (
    <ThemeProvider>
      <main className={styles.main}>
        <BrowserRouter>
          <Navigation setUser={setUser} user={user} />
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/gallery/*" element={<Gallery />}>
              <Route path=":id" element={<Image />} />
            </Route>
            <Route path="/pricing" element={<PricePanel />} />
            <Route path="/contact" element={<ContactForm />} />


            <Route path="/auth" element={user ? <Navigate to={"/"} replace /> : <Auth />}>
              <Route path="signin" element={<SignIn />} />

              {/* <Route path="signin" element={user ? <SignIn /> : <Navigate to={"/signup"} replace />} /> */}

              <Route path="signup" element={<SignUp />} />
            </Route>

            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </main>
    </ThemeProvider>
  )
}

export default App


