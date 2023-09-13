import Personas from "./Personas.json"
import {MyContext} from './MyContext';



function Persona() {
  const {personas, setPersonas} = useContext(MyContext);
  //const {id} = useParams();
  const personaEncontrada = personas.find((elem) => elem.id === id)
  console.log(personaEncontrada + "persona")
  return (
    <div className="per">
            <h1>Datos personales:</h1>
            <h3>Id: {personaEncontrada.id}</h3>
            <h3>Apellido: {personaEncontrada.apellido}</h3>
            <h3>Email: {personaEncontrada.email}</h3>
            <h3>Edad: {personaEncontrada.edad}</h3>
        </div>
  );
}
export default Persona;   