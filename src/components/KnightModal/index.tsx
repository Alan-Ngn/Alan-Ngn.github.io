import { useModal } from "../../context/modal";
import React from 'react'
import "./knightModal.css";
export const KnightModal = () => {
    const { closeModal } = useModal()
    const openLiveLink = () => {
        window.open("https://mango-music-4c4k.onrender.com", "_blank")
    }
    const openGithub = () => {
        window.open("https://github.com/Mango-WorldWide/Mango-Music", "_blank")
    }
    return (
            <article className="Project">
                <button className="close-button" onClick={closeModal}>
                    <i className="fa-regular fa-rectangle-xmark"></i>
                </button>
                <div className="image-link">
                    <img className='MangoSplash' src={process.env.PUBLIC_URL + '/MangoMusicThumb.PNG'}/>
                    <div className="link-github-icon">
                        <a href="https://mango-music-4c4k.onrender.com" rel="noreferrer" target="_blank">
                            <i className="fa-solid fa-arrow-up-right-from-square"></i>
                        </a>
                        <a href="https://github.com/Mango-WorldWide/Mango-Music" rel="noreferrer" target="_blank">
                            <i className="fa-brands fa-github" />
                        </a>
				    </div>
                </div>

                <h3>Mango Music</h3>
                <p>Mango Music draws inspiration from Apple Music and employs JavaScript, React, Redux, Python, Flask, SQLAlchemy, AWS S3, HTML, and CSS. It features a persistent global player, and an integration with AWS S3 for storing and serving .mp4 files.</p>
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

                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" />
                </div>
            </article>
    )
}
