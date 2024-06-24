import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LoginPage from './pages/Login/LoginPage'
import HomePage from './pages/Home/HomePage'
import ArtistPage from './pages/Artist/ArtistPage';

function App() {
  const [token, setToken] = useState<string>();

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/'>
          <Route index Component={HomePage} />
          <Route path='login' element={<LoginPage setToken={setToken} />} />
          <Route path={'artist/:id'} Component={ArtistPage} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
