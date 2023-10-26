import { useModal } from "../../context/modal";
import "./wizardModal.css";
const WizardModal = () => {

    const { closeModal } = useModal()

    const openLiveLink = () => {
        window.open("https://gibberish-z0ju.onrender.com", "_blank")
    }
    const openGithub = () => {
        window.open("https://github.com/Alan-Ngn/Gibberish", "_blank")
    }
    return (
            <article class="Project">
                <button className="close-button" onClick={closeModal}>
                    <i class="fa-regular fa-rectangle-xmark"></i>
                </button>
                <img className='GibberishSplash' src={process.env.PUBLIC_URL + '/GibberishSplashPage.PNG'}/>
                <h3>Gibberish</h3>
                <p>Gibberish is a Slack-inspired website that utilizes JavaScript, React, Redux, Python, Flask, SQLAlchemy, SocketIO, HTML, and CSS. It integrates real-time communication through sockets for all CRUD operations and optimizes rendering by building relationships with multiple tables and utilizing one reducer.</p>
                <div className="site-links">
                    <button className="project-button" onClick={openLiveLink}>
                        Live Link
                    </button>
                    <button className="project-button" onClick={openGithub}>
                        Github
                    </button>
                </div>
            </article>
    )
}

export default WizardModal
