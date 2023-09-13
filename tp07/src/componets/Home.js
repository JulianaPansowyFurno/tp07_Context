import Personas from "./Personas.json"
import { Link } from 'react-router-dom';
import React from "react";


function Home() {
  const {personas, setPersonas} = useContext(MyContext);
  setPersonas(Personas);
  return (
    <div className="Padre">
      <br></br>
      <Link className='BTN' to={`/estadis`}>Estadisticas</Link>
      <br></br>
      <Link className='BTN' to={`/form`}>Form</Link>
      <br></br>

      
      {personas.map((pe) => {
        return(
          
          <div key={pe.id} >
              <Link to={`/persona/${pe.id}`} className='BTN3'> {pe.nombre}</Link>
            <br></br>
          
          </div>
        );
    })}

    </div>
  );
}
export default Home;