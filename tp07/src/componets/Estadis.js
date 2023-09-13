import Personas from "./Personas.json"
import Persona from "./Persona.js"
import { Link } from 'react-router-dom';
import React, { useEffect, useState } from "react"


function Estadis() {
  var cont1 = 0;
  {
    Personas.map((persona) => {
      if (persona.edad > 35) {
        return cont1++;
      }
    })
  }

  const PersonaMayor = Personas.reduce((prev, current) => {
    return parseInt(current.edad) >= parseInt(prev.edad) ? current : prev;
  })

  const PersonaMenor = Personas.reduce((prev, current) => {
    return parseInt(current.edad) <= parseInt(prev.edad) ? current : prev;
  })

  return (
    <div className="Padre">
    <div className="Estadisticas">
      <p>Mayores de 35 años: {cont1}</p>
      <p>Mayor/es : {PersonaMayor.nombre}</p>
      <p>Menor/es : {PersonaMenor.nombre}</p>
      <Link className="BTN" to={`/`}> Home</Link>
    </div>
    </div>
  );
}

export default Estadis; 