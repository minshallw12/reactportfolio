
import './App.css'
import HomePage from './components/HomePage'
import Header from './components/Header'
import NavBar from './components/Navbar'



function App() {

    return (
      <div className='app_container'>

        <Header/>
        <NavBar/>
        <hr />
        <HomePage/>
        <hr />
        <footer>Copyright Will Minshall</footer>

      </div>
    )


}

export default App
