import './App.css'
import { Desks } from './components/Desks/Desks'
import Locations from './components/Locations/Locations'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPeopleRoof } from '@fortawesome/free-solid-svg-icons'

function App() {


  return (
    <>
      <div className="App">
        <header className="App-header">
        <h1 className="header-tittle"><FontAwesomeIcon icon={faPeopleRoof} /> Desk Manager</h1>
        </header>
        <main className="App-main">
          <section className="App-section locations">
            <Locations />
          </section>
          <section className="App-section desks">
            <Desks />
          </section>

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