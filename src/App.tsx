import './App.css';
import React, { useEffect, useRef } from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';
import { CV } from './Components/CV';
import { Formulaire } from './Components/Formulaire';
import Typed from 'typed.js';
import CestMoi from './CestMoi.png';

function Home() {
  const el = useRef(null);

  useEffect(() => {
    const strings = ['Ouissal Chemlal'];
    const typed = new Typed(el.current, {
      strings: strings,
      typeSpeed: 100,
      backSpeed: 100,
      loop: true,
      fadeOut: true,
      fadeOutClass: 'typed-fade-out',
      fadeOutDelay: 500,
      shuffle: true
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section>
      <div className='overlay'></div>
      <img className='CestMoi' src={CestMoi} alt='Cest Moi' />
      <h1>Je M'appelle <span className='font-extrabold change' ref={el}></span></h1>
      <p>
        Bienvenue sur mon site web ! Je suis ravie de vous accueillir dans mon univers professionnel.<br></br>
        Préparez-vous à découvrir mon parcours de manière engageante et interactive.<br></br>
        Je vous invite à parcourir mon CV en ligne pour mieux me connaître.
      </p>
    </section>
  );
}

function App() {
  return (
    <>
      <header className='flex justify-between items-center'>
        <img className='logo w-5' src='./images/logo.png' alt='' />
        <nav className='flex mr-6'>
          <ul className='first ulll flex justify-end'>
            <li><NavLink className='font-extrabold mr-3' style={({ isActive }) => ({ fontWeight: isActive ? 'Bold ' : 'normal' })} to='/'> Accueil</NavLink></li>
            <li><NavLink className='font-extrabold mr-3' style={({ isActive }) => ({ fontWeight: isActive ? 'Bold' : 'normal' })} to='/Formulaire'> Contact </NavLink></li>
            <li><NavLink className='font-extrabold mr-3' style={({ isActive }) => ({ fontWeight: isActive ? 'Bold' : 'normal' })} to='/CV'> CV </NavLink></li>
          </ul>
        </nav>
      </header>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/CV' element={<CV />} />
        <Route path='/Formulaire' element={<Formulaire />} />
      </Routes>
    </>
  );
}

export default App;
