import React, { useState } from 'react';
import LoginPage from './pages/Login/LoginPage'
import HomePage from './pages/Home/HomePage'

function App() {
  const [token, setToken] = useState<string>();

  if (!token) {
    return <LoginPage setToken={setToken} />
  }

  return (
    <div className='App'>
      <HomePage />
    </div>
  );
}

export default App;
