import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from 'react-bootstrap/Button';

function App() {
  return (
  
    <div className="App">
    
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and lomas to flaqui trolo.
        </p>
        <Button  className="btn btn-danger" onClick={ () => {  console.log('flaqui gay')}}>  Hola</Button>
        <p>
          Edit <code>src/App.js</code> and lomas to flaqui trolo.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
