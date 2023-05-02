import headshot from '../../images/square.jpg'

export default function Headshot() {
    return (
        <div className="headshot">
            <img src={headshot} alt="headshot" id="headshot"/>
        </div>
    )
}