import React from 'react';
import logo from './logo.svg';
import './App.css';
import TodoList from "./TodoList";
import './test.css';

function App() {
  return (
    <div className="App">
      <TodoList/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          GraceLove
        </a>
      </header>
    </div>
  );
}
export default App;
