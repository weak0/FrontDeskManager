export interface IUserContext {
    userEmail : string,
    userId: number,
    token: string,
    isAdmin: boolean,
    setUserTokenHandler: (value : any) => any,
    makeReolad: () => void,
    reolad: boolean,
}