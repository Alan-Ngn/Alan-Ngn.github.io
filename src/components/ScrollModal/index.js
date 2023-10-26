import { useModal } from "../../context/modal";
import "./scrollModal.css";
const ScrollModal = () => {
    const { closeModal } = useModal()

    return (
        <div className="scroll-modal">
            <button className="close-button" onClick={closeModal}>
                <i class="fa-regular fa-rectangle-xmark"></i>
            </button>
            <div className="profile-pic">
                <img  className='frame' src={process.env.PUBLIC_URL + '/frame.png'}/>
                <img  className='profile' src={process.env.PUBLIC_URL + '/profile.png'}/>
            </div>
            <div className="about-me">
                <p>
                    My name is Alan Nguyen and I'm a software engineer with a Bachelor's degree in Mathematics and 4+ years of work experience in data analytics.
                </p>
                <p>
                    I've spent the past few years dissecting datasets, deriving insights, and building data-driven solutions that have provided valuable information to stakeholders. During this time, I discovered my passion for coding.
                </p>
                <p>
                    My journey into software engineering started with self-guided learning, where I built upon my knowledge of Excel with VBA and my knowledge of Alteryx with SQL to automate and create efficient reports. From there, I took the next step and joined App Academy, a coding bootcamp where I learned to build applications and hone my coding skills.
                </p>

                <p>
                    I'm actively seeking software engineering positions where I can contribute my unique background as a data analyst and my growing coding skills to help build innovative software products.
                </p>
                {/* process improvements through automation
                    self-learning */}
                {/* <p>

                As a data analyst, I've spent the past few years dissecting datasets, deriving insights, and building data-driven solutions that have provided valuable information to decision-makers. During this time, I discovered my passion for coding and building software applications.
                </p>
                <p>

My journey into software engineering started with self-guided learning, where I've gained proficiency by incorporating languages like VBA, and SQL into my job. From there, I took the plunge and joined App Academy, a coding bootcamp where I built small applications to solidify my coding skills.
                </p>
                <p>

One of my most memorable projects involved developing a Slack clone enabled userss to interact with each other. This experience showed me the transformative power of technology and how it can enhance decision-making processes.
                </p>
                <p>

Now, I'm eager to transition into a software engineering role where I can bring my analytical mindset, problem-solving skills, and passion for clean, efficient code to create impactful software solutions. I'm excited about the endless possibilities in this field and am eager to learn from experienced engineers and mentors.
                </p>
                <p>

I'm actively seeking entry-level software engineering positions where I can contribute my unique background as a data analyst and my growing coding skills to help build innovative software products. If you're in the tech industry and open to connecting with someone on the cusp of this exciting journey, please feel free to reach out.
                </p>
                <p>

Let's connect, collaborate, and build amazing software together!
                </p> */}

            </div>
            <h3>Skills</h3>
            <div class="skills-img">

                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />

                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original-wordmark.svg" />

                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" />

                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" />

                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original-wordmark.svg" />

                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original-wordmark.svg" />

                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg" />

                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg" />

                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original-wordmark.svg" />

                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlalchemy/sqlalchemy-original-wordmark.svg" />

                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/socketio/socketio-original-wordmark.svg" />

                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" />
            </div>
        </div>

    )
}

export default ScrollModal
