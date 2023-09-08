import { connectionString } from "../config";

export const deleteDesk = async (deskId: number, token : string) => {
    const response = await fetch(`${connectionString}/desks/${deskId}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            "Authorization": `Bearer ${token}`

        },
        })

        if (!response.ok) {
            const data = await response.text();
            throw new Error(data);
        }
};