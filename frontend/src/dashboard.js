import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import FooterApp from './footer';
import NavbarApp from './navbar';



function Dashboard() {

    return(
        <div className='container'>
           <NavbarApp></NavbarApp>
            <FooterApp></FooterApp>
        </div>
        
    );
}

export default Dashboard;