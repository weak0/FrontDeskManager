import { connectionString } from "../config";
import { ILocation } from "../interfaces/ILocations";

export const getLocatons = async (token: string): Promise<ILocation[]> => {
    const response = await fetch(`${connectionString}/locations`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization":"Bearer "+token,
        },
    });

    if (!response.ok) {
        const data = await response.text();
        throw new Error(data);
    }
    const data = await response.json();

    return data;
}