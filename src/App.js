import React from 'react';
import './App.css';
import Head from './components/Head';
import LoginForm from './components/LoginForm';
import Menu from './components/Menu';

function App() {
  const items = [{icon: "../assets/home.png", label: "home",},
                {icon: "../assets/gift.svg",label: "deals",},
                {icon: "../assets/upload.png",label: "upload",},
                {icon: "../assets/word.svg",label: "word",},
                {icon: "../assets/setting.png",label: "setting",},
  ];

  return (
    <div className="App">
       <Head/>
       <LoginForm email="tronghoabg@gmail.com"/>
       <Menu items={items} />
    </div>
  );
}
export default App;
