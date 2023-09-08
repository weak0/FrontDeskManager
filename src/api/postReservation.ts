import {connectionString } from "../config";
import { ICreateReservation } from "../interfaces/ICreateReservation";

export const postReservation = async (reservation: ICreateReservation, token: string, deskId : number) => {
    const response = await fetch(`${connectionString}/reservations/${deskId}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify(reservation)})

        if (!response.ok) {
            const data = await response.text();
            throw new Error(data);
        }   
}