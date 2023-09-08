import { IDesk } from "../interfaces/IDesk";
import { connectionString } from "../config";

export const getDesks = async (locationId: number, token: string): Promise<IDesk[]> => {
    const response = await fetch(`${connectionString}/desks/locations/${locationId}`, {
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

};