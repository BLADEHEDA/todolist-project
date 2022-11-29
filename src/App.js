import React from 'react';
import './App.css';
import {useState} from "react";
import  Header from "./components/Header"
import Footer from './components/Footer';
import Todolist from './components/Todolist';

  function App() {
//  the lines below sets the paths for chnaging the modes of the app to dark and light
const [checked,setchecked]= useState();
const toggleclass= checked?"dark":"light";
  return (
    
     <div className={`App ${toggleclass}`}>
          <section className='main' >
      <div className='container'>
      <Header checked={checked} setchecked={setchecked} />    
        <Todolist/>
        <Footer/>  
      </div>
      </section>
    </div>
  
  );
};  

export default App;
