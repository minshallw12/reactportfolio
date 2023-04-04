import { createBrowserRouter } from "react-router-dom";
import App from './App';
import AboutMe from "./pages/AboutMe";
import Resume from './pages/Resume';
import Portfolio from './pages/portfolio'

const router = createBrowserRouter([
    {
        path:'/',
        element: <App/>,
        children: [
            {
                index: true,
                element: <HomePage/>
            },
            {
                path: 'about_me',
                element: <AboutMe/>
            },
            {
                path: 'resume',
                element: <Resume/>
            },
            {
                path: 'portfolio',
                element: <Portfolio/>
            }
        ]
    }
])