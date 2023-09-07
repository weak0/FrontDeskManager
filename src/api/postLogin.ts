import { connectionString } from "../config";

export const postLogin = async (email: string, password: string): Promise<string> => {
    const response = await fetch(`${connectionString}/auth/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            email: email,
            password: password
        })
    });

    if (!response.ok) {
        const data = await response.text();
        throw new Error(data);
    }
    const data = response.text();
    return data;

};