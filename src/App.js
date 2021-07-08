import React from 'react';
import DrinkForm from './components/DrinkForm';
import DrinkList from './components/DrinkList';

import { createStore, applyMiddleware } from "redux";
import { drinkReducer as reducer } from "./reducers/drinkReducer";

import { Provider } from "react-redux";
import thunk from "redux-thunk";


import logo from './logo.svg';
import './App.css';

const store = createStore(reducer, applyMiddleware(thunk));

const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Drinks On Us</h1>
        <DrinkForm />
        <DrinkList />
      </div>
    </Provider>
  );
}

export default App;
