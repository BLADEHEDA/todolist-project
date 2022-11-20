import './App.css';
// import {useState} from "react";
import  Header from "./components/Header"
import Footer from './components/Footer';
import Todolist from './components/Todolist';

  function App() {
// const [theme,settheme]=useState();
// const toggletheme = ()=>{
//   settheme(!theme)
// }
// const themeclass= theme? "light":"dark";
// commiting can very neccessary from the terminal 
  return (
    // <div className= {`App  ${themeclass}`}> 
     <div className="App"> 
       {/* <button onClick={toggletheme}>Toggle Theme</button> */}
          <section className='main' >
      <div className='container'>
      <Header  />
    
        <Todolist/>
        <Footer/>  
      </div>
      </section>
    </div>
    
  );
};  

export default App;
