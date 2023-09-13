import {
  BrowserRouter,
  Routes, Route
} from "react-router-dom";
import Home from './componets/Home.js';
import Persona from "./componets/Persona.js";
import Estadis from "./componets/Estadis.js";
import Form from "./componets/Form.js";
import React,{useState} from 'react';
import {MyContext} from './MyContext';


function App() {
  const [personas,setPersonas]=useState("");
  return (
    <div className="App">
      <MyContext.Provider value={{personas,setPersonas}}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home/>}> </Route>
            <Route path="/persona/:id" element={<Persona />}> </Route>
            <Route path="/estadis" element={<Estadis />}> </Route>
            <Route path="/form" element={<Form />}> </Route>

          </Routes>
        </BrowserRouter>
      </MyContext.Provider>
    </div>
  );
}

export default App;
