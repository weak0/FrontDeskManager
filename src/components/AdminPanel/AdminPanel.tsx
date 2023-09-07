import './AdminPanel.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import LocationsAdmin from './LocationAdmin/LocationsAdmin'
import DesksAdmin from './DeskAdmin/DesksAdmin'
const AdminPanel = () => {

  const [page, setPage] = useState<number>(0)
  const [isActive, setIsActive] = useState<boolean>(false)

  return (
    <div className="AdminPanel">
      <div className='AdminPanel-nav'>
        <p>Admin Panel</p>
        <button onClick={() => setIsActive(!isActive)} className={isActive ? "rotate" : ""}><FontAwesomeIcon icon={faChevronUp} /></button>
      </div>
      {isActive && <LocationsAdmin />}
      {isActive && <DesksAdmin />}
    </div>
  )
}

export default AdminPanel