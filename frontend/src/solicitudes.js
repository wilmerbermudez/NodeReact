import './App.css';
import { useState, useEffect } from 'react'; 
import Axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';


const noti = withReactContent(Swal)


function Solicitudes() {

    const [codigo,setCodigo] = useState("");
    const [descripcion,setDescripcion] = useState("");
    const [resumen,setResumen] = useState("");
    const [id_empleado,setId_empleado] = useState("");
    const [empleado,setEmpleado] = useState("");
    const [empleadoConsulta,setEmpleadoConsulta] = useState("");

    const [solicitudesList,setSolicitudes] = useState([])

    const add = ()=>{
        Axios.post("http://localhost:3001/api/agregarSolicitud", {
          codigo:codigo,
          descripcion:descripcion,
          resumen:resumen,
          id_empleado:1
        }).then(()=>{
          limpiarCampos();
          getSolicitudes();
          noti.fire({
            title: <strong>Registro Exitoso</strong>,
            html: <i>La solicitud Codigo:<b>{codigo}</b> fue creada con Exito</i>,
            icon: 'success',
            timer: 3000
          });
        });
      }
      
      const deleteEmpleado = (val)=>{
        noti.fire({
          title: <strong>Confirmar eliminación</strong>,
          html: <i>Realmente desea eliminar <b>{val.nombre}</b></i>,
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Si, Eliminar',
          cancelButtonText: 'No'
        }).then((result) => {
          if (result.isConfirmed){
            Axios.delete(`http://localhost:3001/api/deleteSolicitud/${val.id}`,).then(()=>{
                getSolicitudes();
                limpiarCampos();   
              });
            noti.fire({
              title: 'Eliminado!',
              text: `Se ha eliminado la solicitud con Codigo ${val.codigo}.`,
              icon: 'success',
              timer: 2000
            })
          }
        }).catch((error)=>{
          noti.fire({
            title: 'Oops...',
            text: `No se puedo eliminar a ${val.nombre}.`,
            icon: 'error',
            footer: error
          })
        });
      }

      const limpiarCampos = ()=>{
        setCodigo('');
        setDescripcion('');
        setResumen('');
        setId_empleado('');
      }

      const getSolicitudes = ()=>{
        Axios.get("http://localhost:3001/api/solicitud")
        .then((response)=>{
          setSolicitudes(response.data);
        });
      }

      const getEmpleado = ()=>{
        Axios.get(`http://localhost:3001/api/empleadoNombre${empleado}`)
        .then((response)=>{
            setEmpleadoConsulta(response.data);
        });
      }

      useEffect(() => {
        getSolicitudes();
      }, []);

  return (
    <div className="container">
        <div className="card text-center">
            <div className="card-header">
                consulta de empleado
            </div>
            <div className="card-body">
                <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">Nombre Empleado:</span>
                    <input type="text" 
                        onChange={(event) => {
                        setEmpleado(event.target.value)
                        }}
                    className="form-control" value={empleadoConsulta} placeholder="Ingrese nombre del empleado" aria-label="Username" aria-describedby="basic-addon1"/>
                    <button type="button" onClick={()=>{
                            getEmpleado(empleadoConsulta)
                          }} className="btn btn-info"><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
                </div>
            </div>
        </div>
      <div className="card text-center">
        <div className="card-header">
          GESTION DE SOLICITUDES
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

      <table className="table table-striped mt" >
        <thead>
          <tr>
            <th scope='col'>#</th>
            <th scope='col'>Codigo</th>
            <th scope='col'>Descripcion</th>
            <th scope='col'>Resumen</th> 
            <th scope='col'>Empleado</th>  
            <th scope='col'>Acciones</th>
          </tr>
        </thead>
        <tbody>
            {
              solicitudesList.map((val,key)=>{
                return <tr key={val.id}>
                        <td>{val.id}</td>
                        <td>{val.codigo}</td>
                        <td>{val.descripcion}</td>
                        <td>{val.resumen}</td> 
                        <td>{val.empleado}</td> 
                        <td>
                        <div className="btn-group" role="group" aria-label="Basic example">
                          <button type="button" onClick={()=>{
                            deleteEmpleado(val)
                          }} className="btn btn-danger">Eliminar</button>
                        </div>
                        </td>
                      </tr>
              })
            }
        </tbody>
      </table>

    </div>
  );
}

export default Solicitudes;
