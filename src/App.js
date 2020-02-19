import React from 'react';
import DrinkForm from './components/DrinkForm';
import DrinkList from './components/DrinkList'
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Drinks On Us</h1>
      <DrinkForm />
      <DrinkList />
    </div>
  );
}

export default App;
