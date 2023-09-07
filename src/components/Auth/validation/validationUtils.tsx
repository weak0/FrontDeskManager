export const emailValidation = (email: string) : boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

export const comparePasswords = (password: string, password2: string) : boolean => {
    return password === password2;
}