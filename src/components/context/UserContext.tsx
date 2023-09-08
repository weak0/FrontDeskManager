import {createContext, useState, useContext, useEffect} from 'react'
import jwtDecode from 'jwt-decode'


export const UserContext: React.Context<any> = createContext( {
    userEmail: '',
    userId:0,
    userToken: '',
    isAdmin: false,
    setUserTokenHandler: (value :any) => value,
    makeReolad: () => {},
    reolad : false
})


 export const UserContextProvider = ({children} : {children : React.ReactNode}) => {
    const [userEmail, setUserEmail] = useState<string>();
    const [userId, setUserId] = useState<number>(0);
    const [isAdmin, setIsAdmin] = useState<boolean>();
    const [token, setToken] = useState<any>();
    const [reolad, setReload] = useState<boolean>(false)

    const ctxValue = {
        userEmail,
        userId,
        isAdmin,
        token,
        setUserTokenHandler: (value : string) => {setToken(value)},
        makeReolad:  () => setReload(!reolad),
        reolad,
    }

    interface DecodedToken {
        [key: string]: string;
    }

    useEffect(() => {
        if(!token) return
        const decodedToken: DecodedToken = jwtDecode(token)
        const userId = decodedToken['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier'];
        const email = decodedToken['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress'];
        const role = decodedToken['http://schemas.microsoft.com/ws/2008/06/identity/claims/role'];
        setIsAdmin(role == "Admin" ? true : false)
        setUserEmail(email)
        setUserId(Number(userId))
    }, [token])
    

  return (
    <UserContext.Provider value={ctxValue}>
        {children}
    </UserContext.Provider>
  );
}

export const useUserContext = () => {
    return useContext(UserContext);
}



