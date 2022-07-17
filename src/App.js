import React from 'react';
import Navbar from './components/navbar/Navbar';
import Header from './components/header/Header';
import About from './components/about/About';
import style from './App.module.css';

function App() {
  return (
    <>
      <Navbar/>
      <Header/>
      <About/>
    </>
  );
}

export default App;
