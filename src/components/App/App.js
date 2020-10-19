import React from 'react';
import './App.css';
import UuidV4 from '../UuidV4/UuidV4'
import UuidV1 from '../UuidV1/UuidV1'

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h1>UUID Generator</h1>
        <p>
          <UuidV4/>
          <UuidV1/>
        </p>
      </header>
    </div>
  );
}

export default App;
