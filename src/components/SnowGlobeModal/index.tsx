import { useModal } from "../../context/modal";
// import "./wizardModal.css";
import React from 'react'
export const SnowGlobeModal = () => {

    const { closeModal } = useModal()

    return (
            <article className="Project">
                <button className="close-button" onClick={closeModal}>
                    <i className="fa-regular fa-rectangle-xmark"></i>
                </button>
                <div className="image-link">
                    <img className='GibberishSplash' src={process.env.PUBLIC_URL + '/underconstruction.png'}/>
                    <div className="link-github-icon">
                        {/* <a href="https://gibberish-z0ju.onrender.com" rel="noreferrer" target="_blank">
                            <i className="fa-solid fa-arrow-up-right-from-square"></i>
                        </a> */}
                        <a href="https://github.com/Alan-Ngn/snowglobe-website" rel="noreferrer" target="_blank">
                            <i className="fa-brands fa-github" />
                        </a>
				    </div>
                </div>

                <h3>SnowGlobe</h3>
                <p>SnowGlobe is a project that informs user’s making plans for ski destinations by tracking snow accumulation YoY at ski resorts. It utilizes TypeScript, React, Redux, Python, Flask, SQLAlchemy, Apache Airflow, ChartJS, HTML, CSS, and SQLite. It is currently in development.</p>
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

                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" />

                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original-wordmark.svg" />

                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apacheairflow/apacheairflow-original-wordmark.svg" />

                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" />

                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" />

                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original-wordmark.svg" />

                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg" />

                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg" />

                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original-wordmark.svg" />

                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlalchemy/sqlalchemy-original-wordmark.svg" />


                </div>
            </article>
    )
}
