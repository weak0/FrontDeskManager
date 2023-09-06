import { connectionString, userToken } from "./config";
import { ILocation } from "./ILocations";

export const getLocatons = async () : Promise<ILocation[]> => { 
    const response = await fetch(`${connectionString}/locations`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": userToken,
        },
    });

    if (!response.ok) {
        const data = await response.text();
        throw new Error(data);
    }
    const data = await response.json();
    
    return data;
}