import React, { useState } from 'react';
import Login from './Login/Login'
import ArtistsBody from './Artists/ArtistsBody';

function App() {
  const [token, setToken] = useState<string>();

  if (!token) {
    return <Login setToken={setToken} />
  }

  return (
    <div>
      <h1>Application</h1>
      <ArtistsBody />
    </div>
  );
}

export default App;
