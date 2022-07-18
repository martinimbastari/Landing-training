import React from 'react';
import Navbar from './components/navbar/Navbar';
import Header from './components/header/Header';
import About from './components/about/About';
import Beneficios from './components/beneficios/Beneficios';
import style from './App.module.css';

function App() {
  return (
    <>
      <Navbar/>
      <Header/>
      <About/>
      <Beneficios/>
    </>
  );
}

export default App;
