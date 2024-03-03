// import { auth } from './api/firebase'
import Form2 from '../Form2/Form2'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../api/firebase'

console.log(auth)

export const SignUp = () => {

  const handleSubmit = ({ email, password }) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((e) => console.log(e))
  }
  return <Form2 nameText="Sign up" submitText="Sign up" handleSubmit={handleSubmit} />
}