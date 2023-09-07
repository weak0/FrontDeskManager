import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronUp } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react"
import { RotateProp } from "@fortawesome/fontawesome-svg-core"
import { deleteDesk } from "../../../api/deleteDesk"
import { useUserContext } from "../../context/UserContext"

const DeleteDeskAdmin = () => {
    const [isActive, setIsActive] = useState(false)
    const [deskId, setDeskId] = useState(0)
    const ctx = useUserContext()
    const rotation = !isActive ? 180 : 0 
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        try {
            await deleteDesk(deskId, ctx.token)
            ctx.makeReolad();
        } catch (error) {
            alert(error)
        }
    }

    return (
        <li>
            <div className="admin-action">
                <p>Delete Desk:</p>
                <button onClick={() => setIsActive(!isActive)}><FontAwesomeIcon icon={faChevronUp} rotation={rotation as RotateProp} /></button>
            </div>
            {isActive &&
                <div >
                    <form className="admin-form" onSubmit={(e) => handleSubmit(e)}>
                        <label htmlFor="deskId-deleteDesk">Desk id: </label>
                        <input type="number" id="deskId-deleteDesk" value={deskId} onChange={(e) => setDeskId(Number(e.target.value))} />
                        <button type="submit">Delete</button>
                    </form>
                </div>
            }

        </li>

    )
}

export default DeleteDeskAdmin