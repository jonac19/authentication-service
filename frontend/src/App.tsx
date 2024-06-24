import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LoginPage from './pages/Login/LoginPage'
import HomePage from './pages/Home/HomePage'

function App() {
  const [token, setToken] = useState<string>();

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/'>
          <Route index element={<HomePage />} />
          <Route path='login' element={<LoginPage setToken={setToken} />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
