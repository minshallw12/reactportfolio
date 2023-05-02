import ContactInfo from './ContactInfo'
import Headshot from './Headshot'
import CurrentlyWorkingAt from './CurrentlyWorkingAt'

export default function Header() {

    return (
        <div className="header">
            <Headshot/>
            <ContactInfo/>
            <CurrentlyWorkingAt/>
        </div>
    )
}