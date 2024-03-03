import { signInWithEmailAndPassword } from 'firebase/auth'
import { NavLink, useNavigate } from 'react-router-dom'
import { auth } from '../api/firebase'
import Form2 from '../Form2/Form2'


export const SignIn = () => {


  const navigate = useNavigate()
  const handleSubmit = ({ email, password }) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((e) => console.log(e))
      .then(() => navigate("/"))

  }

  // return <Form2 nameText='Sign in' submitText="Sign in" singUpText={`Don't have an account? ${<NavLink to="/auth/signup">Sing up</NavLink>}`} handleSubmit={handleSubmit} />
  return (
    <Form2
      nameText='Sign in'
      submitText="Sign in"
      singUpText={`Don't have an account? `}
      signUpLink={<NavLink to="/auth/signup">Sign up</NavLink>}
      handleSubmit={handleSubmit}
    />
  );
}