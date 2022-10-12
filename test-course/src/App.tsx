import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'objects/objects';
import 'primitives/primitives';
import 'functions/functions';
import 'intersection/intersection';
import 'literal/literal';
import 'enums/enums';
import 'assertions/assertions';
import 'index-signature/index-signature';
import 'generics/generics';
import 'utility-types/utility-types';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
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
