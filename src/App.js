import logo from './logo.svg';
import './App.css';

import Form from './Component/Form';
import Navbar from './Component/Navbar';
import Calculator_buttons from './Component/Calculator_buttons';
import {useState} from "react";


function App() {

  

  return (
    <>
    <Navbar/>


    <br/>
    <h1 className='text-center'>Calculator</h1>
    <Form />
    
    
    </>
  );
}

export default App;
