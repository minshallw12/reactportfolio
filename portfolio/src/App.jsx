import './App.css';
import {Outlet} from 'react-router-dom';
import Header from './components/header/Header';
import MyNavBar from './components/header/Navbar';


export default function App() {
    return (
        <div className='app_container'>

            <Header/>
            <MyNavBar/>
            <hr />
            <Outlet/>
            <hr />
            <footer>Copyright© Will Minshall</footer>

      </div>
    )


}

