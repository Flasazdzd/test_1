// Chemin: test_1-main/frontend/src/App.js
import React from 'react';
import './App.css';
import ItemsComponent from './components/ItemsComponent'; // Importez votre composant

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <ItemsComponent />  // Utilisez votre composant ItemsComponent ici
      </header>
    </div>
  );
}

export default App;
