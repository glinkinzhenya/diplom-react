import { useState } from 'react';
import './App.css';
import Header from './pages/Header';
import Left from './pages/Left';
import Footer from './pages/Footer';
import Main from './pages/Main';


function App() {
  return (
    <div className="App">

      <Header />

      <div className='container'>
        <Left />
        <Main />
      </div>
      
      <Footer />

    </div>
  );
}

export default App;
