import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronUp } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react"
import { RotateProp } from "@fortawesome/fontawesome-svg-core"
import { deleteLocation } from "../../../api/deleteLocation"
import { useUserContext } from "../../context/UserContext"
import { IUserContext } from "../../../interfaces/IUserContext"

const DeleteLocationAdmin = () => {
  const [isActive, setIsActive] = useState(false)
  const [locationId, setLocationId] = useState(0)
  const rotation = !isActive ? 180 : 0
  const ctx : IUserContext = useUserContext();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      await deleteLocation(locationId, ctx.token)
      ctx.makeReolad();
    } catch (error) {
      alert(error)
    }
  }


  return (
    <li>
    <div className="admin-action">
      <p>Delete Location:</p>
      <button onClick={() => setIsActive(!isActive)}><FontAwesomeIcon icon={faChevronUp}  rotation={rotation as RotateProp} /></button>
    </div>
    {isActive &&
    <div >
      <form className="admin-form" onSubmit={(e) => handleSubmit(e)}>
        <label htmlFor="locationId-deleteLocation"> Location id : </label>
        <input type="number" id="locationId-deleteLocation" value={locationId} onChange={(e) => setLocationId(Number(e.target.value))}/>
        <button type="submit">Delete</button>
      </form>
    </div>
}
  </li>
  )
}


export default DeleteLocationAdmin;