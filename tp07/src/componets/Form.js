import { Link } from 'react-router-dom';
import React, { useEffect, useState } from "react"


function Form() {
  
  return (
            <div id='Form2' >
              <div className='left'>
                <form>
                    <br></br>
                    <br></br>
                    
                    <div className="omrs-input-group">
                      <label className="omrs-input-filled">
                      <span className="omrs-input-label">Nombre</span>
                      <p></p>
                        <input className="u-full-width" type="text" name="NombreApellido" required></input>
                        <p></p>
                      </label>
			              </div>

                    <div className="omrs-input-group">
                      <label className="omrs-input-filled">
                      <span className="omrs-input-label">Apellido</span>
                      <p></p>
                        <input className="u-full-width" type="text" name="NombreApellido" required></input>
                        <p></p>
                      </label>
			              </div>
                  
                    <br></br>
                    <div id='colorLetrasLogin' className="mb-3">
                    <div className="omrs-input-group">
                    <label className="omrs-input-filled">
                    <span className="omrs-input-label">Edad</span>
                    <p></p>
                      <input className="u-full-width" type="int" name="DNI" required></input>
                      <p></p>
                    </label>
			              </div>
                    </div>

                    <div className="omrs-input-group">
                    <label className="omrs-input-filled">
                    <span className="omrs-input-label">Mail</span>
                    <p></p>
                      <input className="u-full-width" type="email" name="Mail" required></input>
                      <p></p>
                    </label>
			              </div>
                    </form>
                    </div>
                    <br></br>
                    {/* BOTONES PARA LA PROXIMA PAGINA*/}
                  <Link type="submit" className='BTN2'>Enviar</Link>
                  <br></br>
                  <Link className='BTN2' to={`/`}>Home</Link>
              
            
          </div>
  );
}

export default Form; 
