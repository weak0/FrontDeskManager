import { useEffect, useState } from 'react'
import { IUserContext } from '../../interfaces/IUserContext';
import { getYoursReservation } from '../../api/getYoursReservation';
import { useUserContext } from '../context/UserContext';
import { IReservation } from '../../interfaces/IReservation';
import "./Reservations.css"
import ReservationItem from './ReservationItem';


const Reservations = () => {

    const [reservations, setReservations] = useState<IReservation[]>([])

    const ctx: IUserContext = useUserContext();

    const fetchReservations = async () => {
        try {
            const reservations: IReservation[] = await getYoursReservation(ctx.userId, ctx.token)
            setReservations(reservations)
        } catch (error) {
            alert(error)
        }
    }


    useEffect(() => {
        fetchReservations();
    }, [ctx.reolad])

    return (
        <div className='Reservations'>
            <p className='Reservation-tittle'>Yours Reservations:</p>
            <ul className='Reservations-list'>
                {reservations.map((reservation) => (
                    <li className='Reservations-list-li' key={reservation.id}>
                        <ReservationItem data={reservation} />
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Reservations