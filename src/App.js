import React from 'react';
import logo from './logo.svg';
import './App.css';
import Head from './components/Head';
import LoginForm from './components/LoginForm';

function App() {
  return (
    <div className="App">
       <Head/>
       <LoginForm/>
    </div>
  );
}

export default App;
