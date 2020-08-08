import React from 'react';
import './App.css';
import Head from './components/Head';
import LoginForm from './components/LoginForm';
import Menu from './components/Menu';


function App() {
  return (
    <div className="App">
       <Head/>
       <LoginForm/>
       <Menu />
    </div>
  );
}
export default App;
