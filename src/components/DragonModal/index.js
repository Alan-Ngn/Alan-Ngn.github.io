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
        <div>

            <article class="Project">
                <button className="close-button" onClick={closeModal}>
                    <i class="fa-regular fa-rectangle-xmark"></i>
                </button>
                <img className='EarthBnBSplash' src={process.env.PUBLIC_URL + '/EarthbnbSplashPage.PNG'}/>
                <h3>EarthBnB</h3>
                <p>EarthBnB is a JavaScript, React, Redux, and Express-based clone of Airbnb. It achieves dynamic mapping of vacation rentals on the splash page and enhances scalability through Object-Oriented Programming (OOP) and component-based architecture.</p>
                <div className="site-links">
                    <button className="project-button" onClick={openLiveLink}>
                        Live Link
                    </button>
                    <button className="project-button" onClick={openGithub}>
                        Github
                    </button>
                </div>
            </article>
        </div>

    )
}

export default DragonModal
