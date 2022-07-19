import React from 'react';
import Navbar from './components/navbar/Navbar';
import Header from './components/header/Header';
import About from './components/about/About';
import Beneficios from './components/beneficios/Beneficios';
import Planes from './components/planes/Planes';
import Contacto from './components/contacto/Contacto';
import  './App.module.css';

function App() {
  return (
    <>
      <Navbar/>
      <Header/>
      <About/>
      <Beneficios/>
      <Planes/>
      <Contacto/>
    </>
  );
}

export default App;
