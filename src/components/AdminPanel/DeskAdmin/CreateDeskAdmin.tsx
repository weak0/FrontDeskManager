import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronUp } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react"
import { RotateProp } from "@fortawesome/fontawesome-svg-core"
import { useUserContext } from "../../context/UserContext"
import { postDesk } from "../../../api/postDesk"
import { IUserContext } from "../../../interfaces/IUserContext"


const CreateDeskAdmin = () => {
    const [isActive, setIsActive] = useState(false)
    const [locationId, setLocationId] = useState(0)
    const rotation = !isActive ? 180 : 0 
    const ctx : IUserContext = useUserContext()

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        try {
            await postDesk(locationId, ctx.token)
            ctx.makeReolad();
        } catch (error) {
            alert(error)
        }
    }


    return (
        <li>
            <div className="admin-action">
                <p>CreateDesk:</p>
                <button onClick={() => setIsActive(!isActive)}><FontAwesomeIcon icon={faChevronUp} rotation={rotation as RotateProp} /></button>
            </div>
            {isActive &&
                <div >
                    <form className="admin-form" onSubmit={handleSubmit}>
                        <label htmlFor="locationId-deskCreate">Location id: </label>
                        <input type="number" id="locationId-deskCreate"  value={locationId} onChange={(e) => setLocationId(Number(e.target.value))} />
                        <button type="submit">Create</button>
                    </form>
                </div>
            }
        </li>
    )
}

export default CreateDeskAdmin