import { connectionString } from "../config";
import { ICreateLocation } from "../interfaces/ICreateLocation";

export const postLocation = async (location: ICreateLocation, token : string) => {

    const response = await fetch(`${connectionString}/locations`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify(location)
    });

    if (!response.ok) {
        const msg = await response.text();
        throw new Error(msg);
    }
};