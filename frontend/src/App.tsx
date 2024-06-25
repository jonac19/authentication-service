import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LoginPage from './pages/Login/LoginPage'
import HomePage from './pages/Home/HomePage'
import ArtistPage from './pages/Artist/ArtistPage';
import Layout from './components/Layout/Layout';

function App() {
  const [token, setToken] = useState<string>();

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path={'artist/:id'} element={<ArtistPage />} />
          <Route index element={<HomePage />} />
        </Route>
        <Route path='/login' element={<LoginPage setToken={setToken} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
