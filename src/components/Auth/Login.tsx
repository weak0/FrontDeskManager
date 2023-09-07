import { useState } from 'react'
import styles from './register.module.css'
import { emailValidation } from './validation/validationUtils'
import { postLogin } from '../../api/postLogin';
import { useUserContext } from '../context/UserContext';
import { IUserContext } from '../../interfaces/IUserContext';

const Login = ({ newUserHandler }: { newUserHandler: () => void }) => {

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const ctx: IUserContext = useUserContext();

  const loginHandler = async (e: React.MouseEvent) => {
    e.preventDefault();

    if (emailValidation(email)) {
      handleLogin();
      return;
    }
    alert('Email or password is not valid');
  }

  const handleLogin = async () => {
    try {
      const token = await postLogin(email, password);
      ctx.setUserTokenHandler(token);
    }
    catch (e) {
      alert(e);
    }
  }

  return (
    <div className={styles.container}>
      <div>
        <h1 className={styles.h1}>Login</h1>
      </div>
      <div>
        <input
          className={styles.input} value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email' />
      </div>
      <div>
        <input className={styles.input} value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder='Password' />
      </div>
      <div>
        <button className={styles.button} onClick={(e) => loginHandler(e)}>Submit</button>
      </div>
      <span onClick={newUserHandler}> You don't have account? Register!</span>
    </div>

  )
}

export default Login