import React, { useState } from 'react';
import Login from './Login/Login'
import ArtistsBody from './Artists/ArtistsBody';
import Header from './Components/Header/Header'
import './App.css';

function App() {
  const [token, setToken] = useState<string>();

  if (!token) {
    return <Login setToken={setToken} />
  }

  return (
    <div className='App'>
      <Header />
      <ArtistsBody />
    </div>
  );
}

export default App;
