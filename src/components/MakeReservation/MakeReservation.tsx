import './MakeReservation.css'
import { useState } from 'react'
import { postReservation } from '../../api/postReservation'
import { useUserContext } from '../context/UserContext';
import { ICreateReservation } from '../../interfaces/ICreateReservation';
import { IUserContext } from '../context/IUserContext';

const MakeReservation = ({deskId} : {deskId : number}) => {
    const [startDate, setStartDate] = useState<string>('');
    const [endDate, setEndDate] = useState<string>('');

    const ctx : IUserContext = useUserContext();

    const makeReservation = async (e: React.FormEvent) => {
      e.preventDefault();
      const reservation : ICreateReservation = {
        startDate: startDate,
        endDate: endDate,
        userId : ctx.userId,
      }
      try {
        await postReservation(reservation, ctx.token , deskId)
        ctx.makeReolad();
      }
      catch (err) {
        alert(err)
      }

    }

  return (
    <div className='MakeReservation' onSubmit={(e) => makeReservation(e)}>
        <form className='Reservation-form'>
            <div>
            <label htmlFor="start-date">Start Date:</label>
            <input type="date" name="start-date" id="start-date" value={startDate.toString()} onChange={(e) => setStartDate(e.target.value)}/>
            </div>
            <div>
            <label htmlFor="end-date">End Date:</label>
            <input type="date" name="end-date" id="end-date" value={endDate.toString()} onChange={(e) => setEndDate(e.target.value)} /> 
            </div>
            <button type='submit'>Make Reservation</button>
        </form>
    </div>
  )
}


export default MakeReservation