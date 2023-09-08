import { connectionString } from "../config"

export const deleteLocation = async  (locationId : number, token : string) => {
    const response = await fetch(`${connectionString}/locations/${locationId}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            "Authorization": `Bearer ${token}` 
        }
    })
    if (!response.ok) {
        const data = await response.text();
        throw new Error(data);
    }
}