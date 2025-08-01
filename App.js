
import './App.css';
import React from 'react'
import Getcomp from './Components/Getcomp';
import Formcomp from './Components/Formcomp';


const App = () => {
  return (
    <section class='comp'>
      
    <div> <h1>App</h1></div>
    <br/>
    <div>
    <Formcomp/>
    <br/>
    <Getcomp/>
    </div>
    </section>
  )
}

export default App

       
