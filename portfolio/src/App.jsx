import { useState } from 'react'
import './App.css'
import HomePage from './components/HomePage'
import Header from './components/header/Header'
import MyNavBar from './components/header/Navbar'


// key for use states
// 1: HomePage,
// 2: AboutMe
// 3: Resume,
// 4: Portfolio

export default function App() {
    const [selectedPage, setSelectedPage] = useState(1);

    const setSelectedPageById = (id) => {
        if (id) {
          setSelectedPage(id)
        } else {
          setSelectedPage(1)
        }
    }

    return (
        <div className='app_container'>

            <Header/>
            <MyNavBar setSelectedPageById={setSelectedPageById}/>
            <hr />
            <HomePage selectedPage={selectedPage}/>
            <hr />
            <footer>Copyright© Will Minshall</footer>

      </div>
    )


}

