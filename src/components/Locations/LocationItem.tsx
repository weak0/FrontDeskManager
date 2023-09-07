import './Location.css'
import { ILocation } from './../../interfaces/ILocations'
import { getDesks } from './../../api/getDesks'
import { IDesk } from './../../interfaces/IDesk'
import { useUserContext } from './../context/UserContext'
import { IUserContext } from './../../interfaces/IUserContext'

const LocationItem = ({ details, deskHandler }: { details: ILocation, deskHandler: (desks: IDesk[]) => void }) => {

    const ctx: IUserContext = useUserContext();


    const fetchDesks = async () => {
        try {
            const response = await getDesks(details.id, ctx.token)
            deskHandler(response)
        }
        catch (err) {
            alert(err)
        }
    }



    return (
        <div className='Location-Item' onClick={fetchDesks}>
            <div className='Location-Item-header'>
                <p>id: {details.id}</p>
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