const DragonModal = () => {
    return (
        <div>

            <article class="Project">
                <img className='EarthBnBSplash' src={process.env.PUBLIC_URL + '/EarthbnbSplashPage.PNG'}/>
                <h3>EarthBnB</h3>
                <p>EarthBnB is a JavaScript, React, Redux, and Express-based clone of Airbnb. It achieves dynamic mapping of vacation rentals on the splash page and enhances scalability through Object-Oriented Programming (OOP) and component-based architecture.</p>
                <div className="site-links">
                    <a href="https://earthbnb-xzrt.onrender.com" target="_blank" class="button">Live Link</a>
                    <a href="https://github.com/Alan-Ngn/API-project" target="_blank" class="button">Github</a>
                </div>
            </article>
        </div>

    )
}

export default DragonModal
