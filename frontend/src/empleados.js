import './App.css';
import { useState } from 'react'; 
import Axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'


const noti = withReactContent(Swal)


function Empleados() {

const [nombre,setNombre] = useState("");
const [salario,setSalario] = useState();

const add = ()=>{
  Axios.post("http://localhost:3001/api/agregarEmpleado", {
    nombre:nombre,
    salario:parseInt(salario),
  }).then(()=>{
    limpiarCampos();
    noti.fire({
      title: <strong>Registro Exitoso</strong>,
      html: <i>El empleado <b>{nombre}</b> fue registrado con Exito</i>,
      icon: 'success',
      timer: 3000
    });
  });
}


const limpiarCampos = ()=>{
  setNombre('');
  setSalario('');
}



  return (
    <div className="container">
      <div className="card text-center">
        <div className="card-header">
          GESTION DE EMPLEADOS
        </div>
        <div className="card-body">
          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">Nombre:</span>
            <input type="text" 
            onChange={(event) => {
              setNombre(event.target.value)
            }}
            className="form-control" value={nombre} placeholder="Ingrese un Nombre" aria-label="Username" aria-describedby="basic-addon1"/>
          </div>


          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">Salario:</span>
            <input type="number" 
            onChange={(event) => {
              setSalario(event.target.value)
            }}
            className="form-control" value={salario} placeholder="Ingrese el salario" aria-label="Username" aria-describedby="basic-addon1"/>
          </div>       
        </div>
            <button className='btn btn-success' onClick={add}>Registrar</button>
      </div>
    </div>
  );
}

export default Empleados;
