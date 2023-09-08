import { connectionString } from "../config";

export const cancelReservation = async (reservationId: number, token: string) => {

    console.log("cancelReservation: " + reservationId);
    const response = await fetch(`${connectionString}/reservations/${reservationId}`, {
        method: "DELETE",
        headers: {
            "Authorization": "Bearer " + token 
        },

    });
    if (!response.ok) {
        const data = await response.text();
        throw new Error(data);
    }
};