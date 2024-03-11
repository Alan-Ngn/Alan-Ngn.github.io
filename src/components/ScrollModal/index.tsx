import { useModal } from "../../context/modal";
import "./scrollModal.css";
import React from 'react'
export const ScrollModal = () => {
    const { closeModal } = useModal()

    return (
        <div className="scroll-modal">
            <button className="close-button" onClick={closeModal}>
                <i className="fa-regular fa-rectangle-xmark"></i>
            </button>
            <div className="profile-pic">
                <img  className='frame' src={process.env.PUBLIC_URL + '/frame.png'}/>
                <img  className='profile' src={process.env.PUBLIC_URL + '/profile.png'}/>
            </div>
            <div className="about-me">
                <p>
                    My name is Alan Nguyen and I'm a developer with a Bachelor's degree in Mathematics and 5+ years of work experience in data analytics.
                </p>
                <p>
                    I've spent the past few years dissecting datasets, deriving insights, and building data-driven solutions that have provided valuable information to stakeholders. During this time, I discovered my passion for coding.
                </p>
                <p>
                    My journey began with self-guided learning, where I built upon my knowledge of Excel with VBA and my knowledge of Alteryx with SQL to automate and create efficient reports. From there, I took the next step and joined App Academy, a coding bootcamp where I learned to build applications and hone my coding skills.
                </p>

                <p>
                    I'm actively seeking develper roles where I can contribute my unique background as a data analyst and my growing coding skills to help build innovative solutions and products.
                </p>

            </div>
            <h3>Skills</h3>
            <div className="skills-img">

                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" />

                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />

                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg" />

                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apacheairflow/apacheairflow-original-wordmark.svg" />

                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original-wordmark.svg" />

                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" />

                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" />

                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original-wordmark.svg" />

                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original-wordmark.svg" />

                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original-wordmark.svg" />

                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg" />

                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original-wordmark.svg" />

                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg" />

                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg" />

                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlalchemy/sqlalchemy-original-wordmark.svg" />

                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/socketio/socketio-original-wordmark.svg" />

                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" />
            </div>
        </div>

    )
}
