import UnactiveDeskAdmin from "./UnactiveDeskAdmin"
import ChangeLocationAdmin from "./ChangeLocationAdmin"
import DeleteDeskAdmin from "./DeleteDeskAdmin"
import CreateDeskAdmin from "./CreateDeskAdmin"

const DesksAdmin = () => {
  return (
    <div>
      <ul className="admin-list">
        <CreateDeskAdmin />
        <DeleteDeskAdmin />
        <ChangeLocationAdmin />
        <UnactiveDeskAdmin />
      </ul>

    </div>
  )
}

export default DesksAdmin