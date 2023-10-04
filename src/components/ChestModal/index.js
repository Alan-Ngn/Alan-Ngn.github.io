import "./chest.css";
const ChestModal = () => {
    return (
        <div className="contacts">



			<div className="resume-download">
				<img  className='resume' src={process.env.PUBLIC_URL + '/Resume.PNG'}/>
				<div className="download-icon">
					<a href={process.env.PUBLIC_URL + '/Alan Nguyen - Software Engineer Resume.pdf'} target="_blank">
						<i class="fa-solid fa-arrow-up-right-from-square"></i>
					</a>
					<a className='resume-icon' href={process.env.PUBLIC_URL + '/Alan Nguyen - Software Engineer Resume.pdf'} download={process.env.PUBLIC_URL + '/Alan Nguyen - Software Engineer Resume.pdf'}>
						<i class="fa-solid fa-file-arrow-down"></i>
					</a>
				</div>
			</div>
			<div className="contacts-links">

				<a href="https://github.com/Alan-Ngn" rel="noreferrer" target="_blank">
					<i className="fa-brands fa-github" />
				</a>
				<a href="https://www.linkedin.com/in/alannguyen21" rel="noreferrer" target="_blank">
					<i class="fa-brands fa-linkedin"></i>
				</a>
				<a href="https://wellfound.com/u/alan-nguyen-31" rel="noreferrer" target="_blank">
					<i className="fa-brands fa-angellist" />
				</a>
				<a href="mailto:alanngn21@gmail.com" target="_blank" >
					<i class="fa-solid fa-envelope"></i>
				</a>
			</div>

			{/* <a href="images/Alan Nguyen Developer Resume.pdf" target="_blank" class="icon solid fa-file-signature"><span class="label">Resume</span></a> */}

        </div>

    )
}

export default ChestModal
