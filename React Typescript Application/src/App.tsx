//import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Navigation from './Components/Navigation';
import LoginForm from './Components/LoginForm';
import Register from './Components/Register';
import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './Components/Dashboard';

function App() {
  const [isRegisterVisible, setIsRegisterVisible] = useState(false);
  function setRegisterClick(){
    setIsRegisterVisible(!isRegisterVisible);
  }
  function Home({isRegisterVisible,onRegisterClick,}: {isRegisterVisible: boolean;onRegisterClick: () => void;}) {
    return (
      <>
        <Navigation isRegisterVisible={isRegisterVisible} onRegisterClick={onRegisterClick} />
        {isRegisterVisible ? <Register /> : <LoginForm />}
      </>
    );
  }
  return (
    <div>
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home isRegisterVisible={isRegisterVisible} onRegisterClick={setRegisterClick} />} />
        <Route path="/Dashboard" element={<Dashboard/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
