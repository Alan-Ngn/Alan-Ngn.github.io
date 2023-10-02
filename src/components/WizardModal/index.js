const WizardModal = () => {
    return (
            <article class="Project">
                <img className='GibberishSplash' src={process.env.PUBLIC_URL + '/GibberishSplashPage.PNG'}/>
                <h3>Gibberish</h3>
                <p>Gibberish is a Slack-inspired website that utilizes JavaScript, React, Redux, Python, Flask, SQLAlchemy, SocketIO, HTML, and CSS. It integrates real-time communication through sockets for all CRUD operations and optimizes rendering by building relationships with multiple tables funneled into a central Redux store.</p>
                <a href="https://gibberish-z0ju.onrender.com" target="_blank" class="button">Live Link</a>
                <a href="https://github.com/Alan-Ngn/Gibberish" target="_blank" class="button">Github</a>
            </article>
    )
}

export default WizardModal
