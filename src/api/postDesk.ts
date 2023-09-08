import { connectionString } from "../config"


export const postDesk = async (locationId: number, token: string) => {
    const response = await fetch (`${connectionString}/desks/locations/${locationId}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            "Authohrization": `Bearer ${token}`
        }
    })
    if (!response.ok) {
        const data = await response.text();
        throw new Error(data);
    }
}

            