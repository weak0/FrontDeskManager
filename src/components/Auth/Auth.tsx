import { useState } from 'react'
import Login from './Login'
import Register from './Register'

const Auth = () => {

    const [newUser, setNewUser] = useState(false)

    const handleNewUser = () => {
        setNewUser(!newUser)
    }

    return(
        <div style={{position:'absolute', left:'50%', top:'50%', transform: "translate(-50%, -50%)" }}>
             {!newUser ? <Login newUserHandler={handleNewUser} /> : <Register newUserHandler={handleNewUser} />}
        </div>
        

    )
}


export default Auth