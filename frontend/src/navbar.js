import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';



function NavbarApp() {

    return(
        
        <div className='container'>
           <h1>soy el navbar</h1>
             <a href='/empleados'>Empleados</a>
            <a href='/solicitudes'>Solicitudes</a>
        </div>
        
    );
}

export default NavbarApp;