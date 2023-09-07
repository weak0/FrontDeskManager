
import { useEffect, useState } from 'react'
import './Location.css'
import { getLocatons } from '../../api/getLocations'
import { ILocation } from '../../interfaces/ILocations'
import LocationItem from './LocationItem/LocationItem'
import { IDesk } from '../../interfaces/IDesk'
import { useUserContext } from '../context/UserContext'
import { IUserContext } from '../context/IUserContext'

const Locations = ({ deskHandler }: { deskHandler: (desks: IDesk[]) => void }) => {

    const [locations, setLocations] = useState<ILocation[]>([])
    const ctx: IUserContext = useUserContext();


    const fetchLocations = async () => {
        try {
            const locations = await getLocatons(ctx.token)
            setLocations(locations)
        }
        catch (err) {
            alert(err)
        }
    }

    useEffect(() => {
        fetchLocations()
    }, [ctx.reolad])


    return (
        <div className='Locations'>
            <p className='Locations-tittle'>Locations:</p>
            <ul className='Locations-list'>
                {locations.map((location) => (
                    <li className='Locations-list-li' key={location.id}>
                        <LocationItem deskHandler={deskHandler} details={location} />
                    </li>
                ))}
            </ul>

        </div>
    )
}

export default Locations