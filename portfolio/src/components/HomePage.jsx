import Intro from './renders/intro'
import AboutMe from './renders/AboutMe'
import Resume from './renders/Resume'
import Portfolio from './renders/portfolio'

export default function HomePage({selectedPage}) {
    console.log(selectedPage)
    let insert = 1
    if (selectedPage === 1) {
        insert = <Intro/>
    }
    if (selectedPage === 2) {
        insert = <AboutMe/>
    }
    if (selectedPage === 3) {
        insert = <Resume/>
    }
    if (selectedPage === 4) {
        insert = <Portfolio/>
    }
    
    return (
        <div className="HomePage">
 
            {insert}

        </div>
    )
}