
const KnightModal = () => {
    const openLiveLink = () => {
        window.open("https://mango-music-4c4k.onrender.com", "_blank")
    }
    const openGithub = () => {
        window.open("https://github.com/Mango-WorldWide/Mango-Music", "_blank")
    }
    return (
            <article class="Project">
                <img className='MangoSplash' src={process.env.PUBLIC_URL + '/MangoMusicThumb.PNG'}/>
                <h3>Mango Music</h3>
                <p>Mango Music draws inspiration from Apple Music and employs JavaScript, React, Redux, Python, Flask, SQLAlchemy, AWS S3, HTML, and CSS. It features a persistent global player, and an integration with AWS S3 for storing and serving .mp4 files.</p>
                <div className="site-links">
                    <button className="project-button" onClick={openLiveLink}>
                        Live Link
                    </button>
                    <button className="project-button" onClick={openGithub}>
                        Github
                    </button>

                </div>
            </article>
    )
}

export default KnightModal
