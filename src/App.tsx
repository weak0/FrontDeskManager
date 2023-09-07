import './App.css'
import { Desks } from './components/Desks/Desks'
import Locations from './components/Locations/Locations'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPeopleRoof } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import { IDesk } from './interfaces/IDesk'
import { useUserContext } from './components/context/UserContext'
import { IUserContext } from './interfaces/IUserContext'
import Reservations from './components/Reservation/Reservations'
import Auth from './components/Auth/Auth'
import AdminPanel from './components/AdminPanel/AdminPanel'

function App() {

  const [desks, setDesks] = useState<IDesk[]>([]);
  const context: IUserContext = useUserContext();


  return (
    <>
      <div className="App">
        <header className="App-header">
          <h1 className="header-tittle"><FontAwesomeIcon icon={faPeopleRoof} color='#0263e8' /> Desk Manager</h1>
        </header>
        <main className="App-main">
          {context.userId == 0 ? <Auth /> :
            <>
              <section className="App-section locations">
                <Locations deskHandler={(desks: IDesk[]) => setDesks(desks)} />
              </section>
              <section className="App-section desks">
                <Desks desks={desks} />
                <AdminPanel />
              </section>
              <section className="App-section reservations">
                <Reservations />
              </section>
            </>
          }
        </main>
        <footer className="App-footer">
          <p className="footer-description">Created by maciej.gorzela89@gamil.com</p>
        </footer>
      </div>
    </>
  )
}

export default App
5