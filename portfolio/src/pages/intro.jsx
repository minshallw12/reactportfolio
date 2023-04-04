export default function Intro() {


    return (
        <div className="intro_container">
            <div className="left_container">
                <span id='welcomemessage'>Strobing Welcome Message Here!</span>
                <div className="ascii_art_container">
                    <div id="ascii_art">
                        <iframe src="https://giphy.com/embed/26wkAESKHuoLMrN3W" width="480" height="480" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
                    </div>
                </div>
                <div className="spinning_caption">art caption</div>
            </div>
            <div className="right_container">
                <div className="photo">interesting photo</div>
                <div className="container_textbox summary">Summary about relevant experience
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. In rerum, nesciunt delectus laboriosam ipsa mollitia deleniti, eveniet dolores suscipit magnam, repellendus fugit excepturi beatae et tempora. Aperiam itaque nostrum cum!</p>
                </div>
                <div className="photo">interesting photo</div>
                <div className="container_textbox">Notable Achievements
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. </p>
                    <ul>
                        <li>lorem</li>
                        <li>lorem</li>
                        <li>lorem</li>
                    </ul>
                </div>
            </div>

        </div>
    )


}