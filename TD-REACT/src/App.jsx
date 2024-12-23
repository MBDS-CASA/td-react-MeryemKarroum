import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function Header(){
  let name="Meryem"
  return(
    <header>
      <h1>Header is {name}</h1>
    </header>
  )
}

const MainContent = () => {
  const currentDate = new Date();
  const day = currentDate.toLocaleDateString('fr-FR', { weekday: 'long' });
  const month = currentDate.toLocaleDateString('fr-FR', { month: 'long' });
  const year = currentDate.getFullYear();
  const hours = currentDate.getHours().toString().padStart(2, '0');
  const minutes = currentDate.getMinutes().toString().padStart(2, '0');
  const seconds = currentDate.getSeconds().toString().padStart(2, '0');

  return (
    <main>
      Bonjour, on est le {day}, {month}, {year} et il est {hours}:{minutes}:{seconds}
    </main>
  );
};

function Footer(){
  return (
    <footer>
      Tous droits réservés - Meryem Karroum
    </footer>
  );
};

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Header></Header>
        <MainContent></MainContent>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + MBDS +React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <Footer></Footer>
    </>
  )
}

export default App
