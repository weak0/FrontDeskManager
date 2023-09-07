import { useState } from 'react'
import { IDesk } from '../../../interfaces/IDesk'
import '../Desks.css'
import MakeReservation from '../../MakeReservation/MakeReservation';

const DesksItem = ({ desk }: { desk: IDesk }) => {
  const [reservationActive, setreservation] = useState(false);
  const [makeReservationIsActive, setMakeReservationIsActive] = useState(false);

  return (
    <div className='Desks-Item'>
      <div className="Desks-Item-header">
        <p>desk id: {desk.id}</p>
        <p>number of reservations:  {desk.numberOfReservations}</p>

        <p className={`Desks-status ${desk.isAvailable ? "Desks-available" : "Desks-unavailable"}`}> {desk.isAvailable ? "available" : "unavailable"}</p>
      </div>
      <div className='Desks-Item-actions'>
        <button onClick={() => setreservation(!reservationActive)}>Current Reservations</button>
        <button onClick={() => setMakeReservationIsActive(!makeReservationIsActive)}> Make Reservation</button>
      </div>

      <ul className='Reservation-list'>
        {reservationActive && desk.reservations.map(reservation => (
          <div key={desk.id + " " + reservation.startDate} className='Reservation-Item'>Reservation:
            <li className='Reservation-Item-li'>Start Date: {reservation.startDate.toString().slice(0, 10)}</li>
            <li className='Reservation-Item-li'>End Date: {reservation.endDate.toString().slice(0, 10)}</li>
            {reservation.userEmail && <li className='Reservation-Item-li'>User: {reservation.userEmail}</li>}</div>
        ))}

      </ul>
      {makeReservationIsActive && <MakeReservation deskId={desk.id} />}
    </div>

  )
}
export default DesksItem