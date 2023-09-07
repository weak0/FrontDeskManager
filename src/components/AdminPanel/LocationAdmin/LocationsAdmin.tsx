import CreateLocationAdmin from "./CreateLocationAdmin"
import DeleteLocationAdmin from "./DeleteLocationAdmin"

const LocationsAdmin = () => {
  return (
    <div>
      <ul className="admin-list">
        <CreateLocationAdmin />
        <DeleteLocationAdmin />
      </ul>

    </div>
  )
}

export default LocationsAdmin