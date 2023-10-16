const WizardModal = () => {
    const openLiveLink = () => {
        window.open("https://gibberish-z0ju.onrender.com", "_blank")
    }
    const openGithub = () => {
        window.open("https://github.com/Alan-Ngn/Gibberish", "_blank")
    }
    return (
            <article class="Project">
                <img className='GibberishSplash' src={process.env.PUBLIC_URL + '/GibberishSplashPage.PNG'}/>
                <h3>Gibberish</h3>
                <p>Gibberish is a Slack-inspired website that utilizes JavaScript, React, Redux, Python, Flask, SQLAlchemy, SocketIO, HTML, and CSS. It integrates real-time communication through sockets for all CRUD operations and optimizes rendering by building relationships with multiple tables and utilizing one reducer.</p>
                <div className="site-links">
                <button onClick={openLiveLink}>
                        Live Link
                    </button>
                    <button onClick={openGithub}>
                        Github
                    </button>
                </div>
            </article>
    )
}

export default WizardModal
