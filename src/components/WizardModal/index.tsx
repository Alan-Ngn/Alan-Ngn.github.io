import { useModal } from "../../context/modal";
import "./wizardModal.css";
import React from 'react'
export const WizardModal = () => {

    const { closeModal } = useModal()

    const openLiveLink = () => {
        window.open("https://gibberish-z0ju.onrender.com", "_blank")
    }
    const openGithub = () => {
        window.open("https://github.com/Alan-Ngn/Gibberish", "_blank")
    }
    return (
            <article className="Project">
                <button className="close-button" onClick={closeModal}>
                    <i className="fa-regular fa-rectangle-xmark"></i>
                </button>
                <div className="image-link">
                    <img className='GibberishSplash' src={process.env.PUBLIC_URL + '/GibberishSplashPage.PNG'}/>
                    <div className="link-github-icon">
                        <a href="https://gibberish-z0ju.onrender.com" rel="noreferrer" target="_blank">
                            <i className="fa-solid fa-arrow-up-right-from-square"></i>
                        </a>
                        <a href="https://github.com/Alan-Ngn/Gibberish" rel="noreferrer" target="_blank">
                            <i className="fa-brands fa-github" />
                        </a>
				    </div>
                </div>

                <h3>Gibberish</h3>
                <p>Gibberish is a Slack-inspired website that utilizes JavaScript, React, Redux, Python, Flask, SQLAlchemy, SocketIO, HTML, and CSS. It integrates real-time communication through sockets for all CRUD operations and optimizes rendering by building relationships with multiple tables and utilizing one reducer.</p>
                {/* <div className="site-links">
                    <button className="project-button" onClick={openLiveLink}>
                        Live Link
                    </button>
                    <button className="project-button" onClick={openGithub}>
                        Github
                    </button>
                </div> */}
                            <h3>Skills</h3>
                <div className="skills-img">

                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />

                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original-wordmark.svg" />

                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" />

                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" />

                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original-wordmark.svg" />

                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg" />

                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg" />

                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original-wordmark.svg" />

                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlalchemy/sqlalchemy-original-wordmark.svg" />

                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/socketio/socketio-original-wordmark.svg" />
                </div>
            </article>
    )
}

// export default WizardModal
