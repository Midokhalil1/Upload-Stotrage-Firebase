import React from 'react';
import Upload from './components/Upload';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={"https://firebasestorage.googleapis.com/v0/b/upload-storage-mk.appspot.com/o/2022.10.31-BocaCode-23.jpg?alt=media"} className="App-logo" alt="logo" />
        <p>
          Edit <code>WOOP WOOP</code> WOOP WOOP 
        </p>
        <Upload />
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
