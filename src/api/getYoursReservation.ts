import { adminToken, connectionString } from '../config.ts'

export const getYoursReservation = async (userId: number, token: string) => {
    const response = await fetch(`${connectionString}/reservations/${userId}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            // "Authorization":"Bearer "+token,
            "Authorization": adminToken
        },
    });

    if (!response.ok) {
        const data = await response.text();
        throw new Error(data);
    }
    const data = await response.json();
    return data;

}

