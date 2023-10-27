import { useModal } from "../../context/modal";
import "./dragonModal.css";
const DragonModal = () => {

    const { closeModal } = useModal()

    const openLiveLink = () => {
        window.open("https://earthbnb-xzrt.onrender.com", "_blank")
    }
    const openGithub = () => {
        window.open("https://github.com/Alan-Ngn/API-project", "_blank")
    }
    return (


            <article class="Project">
                <button className="close-button" onClick={closeModal}>
                    <i class="fa-regular fa-rectangle-xmark"></i>
                </button>
                <div className="earth-image-link">
                    <img className='EarthBnBSplash' src={process.env.PUBLIC_URL + '/EarthbnbSplashPage.PNG'}/>
                    <div className="link-github-icon">
                        <a href="https://earthbnb-xzrt.onrender.com" rel="noreferrer" target="_blank">
                            <i class="fa-solid fa-arrow-up-right-from-square"></i>
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
            </article>


    )
}

export default DragonModal
