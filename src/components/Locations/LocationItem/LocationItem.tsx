import '../Location.css'
import { ILocation } from '../../../api/ILocations'
import { getDesks } from '../../../api/getDesks'
import { useState } from 'react'
import { IDesk } from '../../../api/IDesk'

const LocationItem = ({details} : {details : ILocation}) => {

    const [desks, setDesks] = useState<IDesk[]>([])

    const fetchDesks = async () => {
        try {
            const response = await getDesks(details.id)
            setDesks(response)
            console.log(desks)
        }
        catch (err) {
            alert(err)
        }
    }

  return (
    <div className='Location-Item' onClick={fetchDesks}>
        <div className='Location-Item-header'>
        <p>{details.name}</p>
        <p>Desks: {details.numberOfDesks}</p>
            </div>
        <div className='Location-Item-body'>
        <p>city: {details.city}</p>
        <p>street: {details.street}</p>
        <p>room: {details.room}</p>
            </div>
        
    </div>
  )
}

export default LocationItem