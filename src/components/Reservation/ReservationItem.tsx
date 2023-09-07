import { IReservation } from './../../interfaces/IReservation'
import { cancelReservation } from './../../api/deleteReservation'
import { useUserContext } from './../context/UserContext'
import { IUserContext } from './../../interfaces/IUserContext';

const ReservationItem = ({ data }: { data: IReservation }) => {

    const ctx: IUserContext = useUserContext();

    const deleteReservation = async () => {
        try {
            await cancelReservation(data.id, ctx.token)
            ctx.makeReolad();
        }
        catch (err) {
            alert(err)
        }
    }

    return (
        <div className='Reservations-Item'>
            <p className='Reservations-p'>desk: {data.deskId}</p>
            <p className='Reservations-p'>from: {data.startDate.toString().slice(0, 10)}</p>
            <p className='Reservations-p'>to: {data.endDate.toString().slice(0, 10)}</p>
            <button className='Reservations-button' onClick={deleteReservation}>Cancel</button>

        </div>
    )
}

export default ReservationItem