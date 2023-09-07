import { IDesk } from "../../interfaces/IDesk"
import DesksItem from "./DesksItem"
import './Desks.css';

export const Desks = ({ desks }: { desks: IDesk[] }) => {
  return (
    <div className="Desks">
      <p className="Desks-tittle">Desks:</p>
      <ul className="Desks-list">
        {desks.map(desk => (
          <li className="Desks-list-li" key={desk.id + "desk"}>
            <DesksItem desk={desk} />
          </li>
        ))}
      </ul>
    </div>
  )
}
