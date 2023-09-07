import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronUp } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react"
import { RotateProp } from "@fortawesome/fontawesome-svg-core"
import { useUserContext } from "../../context/UserContext"
import { IUserContext } from "../../../interfaces/IUserContext"
import { postLocation } from "../../../api/postLocation"
import { ICreateLocation } from "../../../interfaces/ICreateLocation"

const CreateLocationAdmin = () => {
  
    const [isActive, setIsActive] = useState(false)
    const [name , setName] = useState('')
    const [city , setCity] = useState('')
    const [street , setStreet] = useState('')
    const [room , setRoom] = useState('')
    const rotation = !isActive ? 180 : 0

    const ctx : IUserContext = useUserContext()

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      const location : ICreateLocation = {
        name,
        street,
        city,
        room
    }
    try {
      await postLocation(location, ctx.token);
      ctx.makeReolad();
    } catch (error) {
      alert(error);
    }

  }
      

  return (
    <li>
    <div className="admin-action">
      <p>Create Location:</p>
      <button onClick={() => {setIsActive(!isActive)}}><FontAwesomeIcon icon={faChevronUp} rotation={rotation as RotateProp} /></button>
    </div>
    {isActive &&
    <div >
      <form className="admin-form" onSubmit={handleSubmit}>
        <label htmlFor="Name-createLocation">name : </label>
        <input type="text" id="Name-createLocation" value={name} onChange={(e) => setName(e.target.value)} />
        <label htmlFor="city-createLocation">city: </label>
        <input type="text" id="city-createLocation"  value={city} onChange={(e) => setCity(e.target.value)} />
        <label htmlFor="street-createLocation">street: </label>
        <input type="text" id="street-createLocation"  value={street} onChange={(e) => setStreet(e.target.value)} />
        <label htmlFor="room-createLocation" >room: </label>
        <input type="text" id="room-createLocation" value={room} onChange={(e) => setRoom(e.target.value)} />
        <button type="submit">Create</button>
      </form>
    </div>
}
  </li>
  )
}

export default CreateLocationAdmin