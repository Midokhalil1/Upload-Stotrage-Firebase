import React from 'react';
import Upload from './components/Upload';
import './App.css';

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={"https://firebasestorage.googleapis.com/v0/b/upload-storage-mk.appspot.com/o/photos%2F2022.10.31-BocaCode-23.jpg?alt=media"} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Upload/>
      </header>
    </div>
  );
}


