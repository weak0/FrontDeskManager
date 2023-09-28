import { IRegisterDto } from "../interfaces/IRegisterDto";
import { connectionString } from "../config";

export const postRegister = async (value: IRegisterDto) => {
    const response = await fetch(`${connectionString}/auth/register`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            firstName: value.firstName,
            lastName: value.lastName,
            email: value.email,
            confirmEmail: value.confirmEmail,
            password: value.password,
            confirmPassword: value.confirmPassword,
        })
    });

    if (!response.ok) {
        const data = await response.text();
        throw new Error(data);
    }
};