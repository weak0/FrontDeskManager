import { useState } from 'react'
import { IDesk } from './../../interfaces/IDesk'
import './Desks.css'
import MakeReservation from './../MakeReservation/MakeReservation';
import { useEffect } from 'react'
import { useUserContext } from './../context/UserContext';
import { IUserContext } from './../../interfaces/IUserContext';
import { getDesk } from './../../api/getDesk';

const DesksItem = ({ desk }: { desk: IDesk }) => {
  const [reservationActive, setreservation] = useState(false);
  const [makeReservationIsActive, setMakeReservationIsActive] = useState(false);
  const [deskDetails, setDeskDetails] = useState<IDesk>(desk);
  const ctx: IUserContext = useUserContext();

  const reoladData = async () => {
    const data = await getDesk(desk.id, ctx.token);
    setDeskDetails(data);
  }
  useEffect(() => {
    reoladData();

  }, [ctx.reolad])

  return (
    <div className='Desks-Item'>
      <div className="Desks-Item-header">
        <p>desk id: {deskDetails.id}</p>
        <p>number of reservations:  {deskDetails.numberOfReservations}</p>

        <p className={`Desks-status ${deskDetails.isAvailable ? "Desks-available" : "Desks-unavailable"}`}> {deskDetails.isAvailable ? "available" : "unavailable"}</p>
      </div>
      <div className='Desks-Item-actions'>
        <button onClick={() => setreservation(!reservationActive)}>Current Reservations</button>
        <button onClick={() => setMakeReservationIsActive(!makeReservationIsActive)}> Make Reservation</button>
      </div>

      <ul className='Reservation-list'>
        {reservationActive && deskDetails.reservations.map(reservation => (
          <div key={deskDetails.id + " " + reservation.startDate} className='Reservation-Item'>Reservation:
            <li className='Reservation-Item-li'>Start Date: {reservation.startDate.toString().slice(0, 10)}</li>
            <li className='Reservation-Item-li'>End Date: {reservation.endDate.toString().slice(0, 10)}</li>
            {reservation.userEmail && <li className='Reservation-Item-li'>User: {reservation.userEmail}</li>}</div>
        ))}

      </ul>
      {makeReservationIsActive && <MakeReservation deskId={deskDetails.id} />}
    </div>

  )
}
export default DesksItem