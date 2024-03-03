import { signInWithEmailAndPassword } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import { auth } from '../api/firebase'
import Form2 from '../Form2/Form2'

export const SignIn = () => {
  const navigate = useNavigate()
  const handleSubmit = ({ email, password }) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((e) => console.log(e))
      .then(() => navigate("/"))

  }

  return <Form2 nameText='Sign in' submitText="Sign in" handleSubmit={handleSubmit} />
}