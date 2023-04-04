import { createBrowserRouter } from "react-router-dom";
import App from './App';
import Intro from './pages/intro';
import AboutMe from "./pages/AboutMe";
import Resume from './pages/Resume';
import Portfolio from './pages/portfolio';
import NoPage from "./pages/NoPage";

const router = createBrowserRouter([
    {
        path:'/',
        element: <App/>,
        children: [
            {
                index: true,
                element: <Intro/>
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
            },
            {
                path: "*",
                element: <NoPage/>

            }
        ]
    }
])

export default router;