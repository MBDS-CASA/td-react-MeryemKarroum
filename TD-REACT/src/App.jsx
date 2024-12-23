import React, { useEffect, useState } from 'react';
import './App.css';
import GradeInfo from './components/GradeInfo';
import gradeData from './data.json';
import { getRandomItem } from './utils/random';
import emsiLogo from '/vite.svg';



function Header(){
  let name="Meryem"
  return(
    <header>
      <h1>Header is {name}</h1>
    </header>
  )
}

function MainContent() {
  const [randomGrade, setRandomGrade] = useState(null);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setRandomGrade(getRandomItem(gradeData));
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  const now = new Date();
  const jours = ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'];
  const mois = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'];

  return (
    <main className="container mx-auto px-4 py-8">
      <h3 className="text-lg mb-4">
        Bonjour, on est le {jours[now.getDay()]}, {now.getDate()} {mois[now.getMonth()]}, {now.getFullYear()} et il est {now.getHours().toString().padStart(2, '0')}:{now.getMinutes().toString().padStart(2, '0')}:{now.getSeconds().toString().padStart(2, '0')}
      </h3>
      {randomGrade && <GradeInfo gradeInfo={randomGrade} />}
    </main>
  );
}

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-gray-200 p-4 text-center">
      <h5>© {currentYear} - Karroum Meryem, Tous droits réservés</h5>
    </footer>
  );
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <Header></Header>
        <MainContent></MainContent>
      <Footer></Footer>
    </>
  )
}

export default App
