import './App.css'
import HomePage from './pages/HomePage'
import Header from './components/header/Header'
import MyNavBar from './components/header/Navbar'



export default function App() {
    return (
        <div className='app_container'>

            <Header/>
            <MyNavBar/>
            <hr />
            <HomePage/>
            <hr />
            <footer>Copyright© Will Minshall</footer>

      </div>
    )


}

