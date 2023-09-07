import { adminToken, connectionString } from "../config";

export const changeLocatioDesk = async (deskId : number,locationId : number, token : string) => {
    const response = await fetch(`${connectionString}/desks/${deskId}/locations/${locationId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            // "Authorization": `Bearer ${token}`
            "Authorization": adminToken 
        },
        })

        if (!response.ok) {
            const data = await response.text();
            throw new Error(data);
        }
};