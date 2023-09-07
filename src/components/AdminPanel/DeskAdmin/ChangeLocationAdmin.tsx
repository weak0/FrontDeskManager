import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronUp } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react"
import { RotateProp } from "@fortawesome/fontawesome-svg-core"
import { useUserContext } from "../../context/UserContext"
import { changeLocatioDesk } from "../../../api/changeLocationDesks"

const ChangeLocationAdmin = () => {
    const [isActive, setIsActive] = useState(false)
    const [locationId, setLocationId] = useState(0)
    const [deskId, setDeskId] = useState(0)
    const ctx = useUserContext()

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        try {
            await changeLocatioDesk(deskId, locationId,  ctx.token)
            ctx.makeReolad();
        } catch (error) {
            alert(error)
        }
    }


    const rotation = !isActive ? 180 : 0 
    return (
        <li>
            <div className="admin-action">
                <p>Change Location:</p>
                <button onClick={() => setIsActive(!isActive)}><FontAwesomeIcon icon={faChevronUp} rotation={rotation as RotateProp} /></button>
            </div>
            {isActive &&
                <div >
                    <form className="admin-form" onSubmit={handleSubmit}>
                        <label htmlFor="locationId-changeDesk">Location id: </label>
                        <input type="number" id="locationId-changeDesk" value={locationId} onChange={(e) => setLocationId(Number(e.target.value))} />
                        <label htmlFor="deskId-changeDesk">Desk id: </label>
                        <input type="number" id="deskId-changeDesk"  value={deskId} onChange={(e) => setDeskId(Number(e.target.value))} />
                        <button type="submit">Change</button>
                    </form>
                </div>
            }

        </li>
    )
}

export default ChangeLocationAdmin