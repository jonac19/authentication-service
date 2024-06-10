import React, { useState } from 'react';
import Login from './Login/Login'
import ArtistsBody from './Artists/ArtistsBody';
import Header from './Components/Header/Header'
import Hero from './Components/Hero/Hero'
import './App.css';

function App() {
  const [token, setToken] = useState<string>();

  if (!token) {
    return <Login setToken={setToken} />
  }

  return (
    <div className='App'>
      <Header />
      <Hero />
      <ArtistsBody />
    </div>
  );
}

export default App;
