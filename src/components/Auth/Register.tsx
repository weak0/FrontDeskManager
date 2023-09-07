import { useState } from "react"
import styles from './register.module.css'
import { emailValidation, comparePasswords } from './validation/validationUtils'
import { IRegisterDto } from "../../interfaces/IRegisterDto";
import { postRegister } from "../../api/postRegister";

const Register = ({ newUserHandler }: { newUserHandler: () => void }) => {
    const [firstName, setFirstName] = useState<string>('');
    const [lastName, setLastName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [email2, setEmail2] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [password2, setPassword2] = useState<string>('');

    const registerHandler = (e: React.MouseEvent) => {
        e.preventDefault();
        if (!emailValidation(email)) {
            alert('Email is not valid');
            return;
        }
        if (!comparePasswords(password, password2)) {
            alert('Passwords do not match');
            return;
        }
        handleRegister();

    }


    const handleRegister = async () => {
        const value: IRegisterDto = { firstName, lastName, email, confirmEmail: email2, password, confirmPassword: password2 };
        console.log(value);
        try {
            await postRegister(value);
            alert("success")
        }
        catch (e) {
            alert(e);
        }

    }



    return (
        <div className={styles.container}>
            <div>
                <h1 className={styles.h1} >Register</h1>
            </div>
            <div>
                <input className={styles.input} value={firstName} onChange={(e) => setFirstName(e.target.value)} placeholder='FirstName' />
            </div>
            <div>
                <input className={styles.input} value={lastName} onChange={(e) => setLastName(e.target.value)} placeholder='LastName' />
            </div>
            <div>
                <input className={styles.input} value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email' />
            </div>
            <div>
                <input className={styles.input} value={email2} onChange={(e) => setEmail2(e.target.value)} placeholder='ConfirmEmail' />
            </div>
            <div>
                <input className={styles.input} type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Password' />
            </div>
            <div>
                <input className={styles.input} type="password" value={password2} onChange={(e) => setPassword2(e.target.value)} placeholder='Confirm Password' />
            </div>
            <div>
                <button onClick={(e) => registerHandler(e)} className={styles.button}>Submit</button>
            </div>
            <span onClick={newUserHandler}> You already have account? Login!</span>
        </div>)
}

export default Register