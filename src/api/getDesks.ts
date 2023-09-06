import { IDesk } from "./IDesk";
import { connectionString, userToken } from "./config";

export const getDesks = async (locationId : number) : Promise<IDesk[]> => { 
    const response = await fetch(`${connectionString}/desks/locations/${locationId}`, {
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

};