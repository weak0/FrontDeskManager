import { IDeskReservation } from "./IDeskReservation";

export interface IDesk {
    id: number;
    locationName: string;
    isAvailable: boolean;
    numberOfReservations: number;
    reservations: IDeskReservation[];
}