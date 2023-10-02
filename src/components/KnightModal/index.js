const KnightModal = () => {
    return (
            <article class="Project">
                <img className='MangoSplash' src={process.env.PUBLIC_URL + '/MangoMusicThumb.PNG'}/>
                <h3>Mango Music</h3>
                <p>Mango Music draws inspiration from Apple Music and employs JavaScript, React, Redux, Python, Flask, SQLAlchemy, AWS S3, HTML, and CSS. It features a persistent global player, and an integration with AWS S3 for storing and serving .mp4 files.</p>
                <a href="https://mango-music-4c4k.onrender.com" target="_blank" class="button">Live Link</a>
                <a href="https://github.com/Mango-WorldWide/Mango-Music" target="_blank" class="button">Github</a>
            </article>
    )
}

export default KnightModal
