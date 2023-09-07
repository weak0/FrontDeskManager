import { adminToken, connectionString } from "../config";

export const unactiveDesk = async (deskId : number, token : string) => {
    const response = await fetch(`${connectionString}/desks/${deskId}/unavailable`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
            // "Authorization": `Bearer ${token}`
            "Authorization": adminToken
        },
    });
    if (!response.ok) {
        const data = await response.text();
        throw new Error(data);
    }
}