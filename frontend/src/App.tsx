import React, { useState } from 'react';
import Login from './Login/Login'

function App() {
  const [token, setToken] = useState<string>();

  if (token) {
    return <Login setToken={setToken} />
  }

  return (
    <div>
      <h1>Application</h1>
    </div>
  );
}

export default App;
