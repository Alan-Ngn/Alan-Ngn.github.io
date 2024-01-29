import { useModal } from "../../context/modal";
import "./dragonModal.css";
import React from 'react'
export const DragonModal = () => {
    const { closeModal } = useModal()
    return (


            <article className="Project">
                <button className="close-button" onClick={closeModal}>
                    <i className="fa-regular fa-rectangle-xmark"></i>
                </button>
                <div className="image-link">
                    <img className='EarthBnBSplash' src={process.env.PUBLIC_URL + '/EarthbnbSplashPage.PNG'}/>
                    <div className="link-github-icon">
                        <a href="https://earthbnb-xzrt.onrender.com" rel="noreferrer" target="_blank">
                            <i className="fa-solid fa-arrow-up-right-from-square"></i>
                        </a>
                        <a href="https://github.com/Alan-Ngn/API-project" rel="noreferrer" target="_blank">
                            <i className="fa-brands fa-github" />
                        </a>
				    </div>
                </div>
                <h3>EarthBnB</h3>
                <p>EarthBnB is a JavaScript, React, Redux, and Express-based clone of Airbnb. It achieves dynamic mapping of vacation rentals on the splash page and enhances scalability through Object-Oriented Programming (OOP) and component-based architecture.</p>
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

                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" />

                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" />

                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original-wordmark.svg" />

                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original-wordmark.svg" />

                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg" />

                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg" />

                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original-wordmark.svg" />

                    </div>
            </article>


    )
}
