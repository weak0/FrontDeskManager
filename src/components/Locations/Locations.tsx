
import { useEffect, useState } from 'react'
import './Location.css'
import { getLocatons } from '../../api/getLocations'
import { ILocation } from '../../api/ILocations'
import LocationItem from './LocationItem/LocationItem'

const Locations = () => {

    const [locations, setLocations] = useState<ILocation[]>  ([])

const fetchLocations = async () => {
    try {
        const locations = await getLocatons()
        setLocations(locations)
    }
    catch (err) {
        alert(err)
    }
}

useEffect(() => {
    fetchLocations()
}, [])


return (
    <div className='Locations'>
        <p className='Locations-tittle'>Locations:</p>
        <ul className='Locations-list'>
            {locations.map((location) => (
                <li className='Locations-list-li' key={location.id}>
                    <LocationItem details={location} />
                </li>
            ))}
        </ul>

    </div>
)
}

export default Locations