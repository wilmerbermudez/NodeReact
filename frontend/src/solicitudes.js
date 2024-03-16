import './App.css';
import { useState } from 'react'; 
import Axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'


const noti = withReactContent(Swal)


function Solicitudes() {

    const [codigo,setCodigo] = useState("");
    const [descripcion,setDescripcion] = useState("");
    const [resumen,setResumen] = useState("");
    const [id_empleado,setId_empleado] = useState("");

    const add = ()=>{
        Axios.post("http://localhost:3001/api/agregarSolicitud", {
          codigo:codigo,
          descripcion:descripcion,
          resumen:resumen,
          id_empleado:1
        }).then(()=>{
          limpiarCampos();
          noti.fire({
            title: <strong>Registro Exitoso</strong>,
            html: <i>La solicitud Codigo:<b>{codigo}</b> fue creada con Exito</i>,
            icon: 'success',
            timer: 3000
          });
        });
      }
      
      
      const limpiarCampos = ()=>{
        setCodigo('');
        setDescripcion('');
        setResumen('');
        setId_empleado('');
      }

  return (
    <div className="container">
        <div>
            consulta de empleado
        </div>
      <div className="card text-center">
        <div className="card-header">
          GESTION DE EMPLEADOS
        </div>
        <div className="card-body">
          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">Codigo:</span>
            <input type="text" 
            onChange={(event) => {
              setCodigo(event.target.value)
            }}
            className="form-control" value={codigo} placeholder="Ingrese un Codigo de solicitud" aria-label="Username" aria-describedby="basic-addon1"/>
          </div>


          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">Descripcion:</span>
            <input type="text" 
            onChange={(event) => {
              setDescripcion(event.target.value)
            }}
            className="form-control" value={descripcion} placeholder="Ingrese la descripcion" aria-label="Username" aria-describedby="basic-addon1"/>
          </div> 

          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">Resumen:</span>
            <input type="text" 
            onChange={(event) => {
              setResumen(event.target.value)
            }}
            className="form-control" value={resumen} placeholder="Ingrese un resumen de la solicitud" aria-label="Username" aria-describedby="basic-addon1"/>
          </div>       
        </div>
            <button className='btn btn-success' onClick={add}>Registrar</button>
      </div>
    </div>
  );
}

export default Solicitudes;
