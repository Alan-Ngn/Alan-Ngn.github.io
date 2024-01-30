import { useModal } from "../../context/modal";
import "./dragonModal.css";
import React from 'react';
export const DragonModal = () => {
    const { closeModal } = useModal();
    return (React.createElement("article", { className: "Project" },
        React.createElement("button", { className: "close-button", onClick: closeModal },
            React.createElement("i", { className: "fa-regular fa-rectangle-xmark" })),
        React.createElement("div", { className: "image-link" },
            React.createElement("img", { className: 'EarthBnBSplash', src: process.env.PUBLIC_URL + '/EarthbnbSplashPage.PNG' }),
            React.createElement("div", { className: "link-github-icon" },
                React.createElement("a", { href: "https://earthbnb-xzrt.onrender.com", rel: "noreferrer", target: "_blank" },
                    React.createElement("i", { className: "fa-solid fa-arrow-up-right-from-square" })),
                React.createElement("a", { href: "https://github.com/Alan-Ngn/API-project", rel: "noreferrer", target: "_blank" },
                    React.createElement("i", { className: "fa-brands fa-github" })))),
        React.createElement("h3", null, "EarthBnB"),
        React.createElement("p", null, "EarthBnB is a JavaScript, React, Redux, and Express-based clone of Airbnb. It achieves dynamic mapping of vacation rentals on the splash page and enhances scalability through Object-Oriented Programming (OOP) and component-based architecture."),
        React.createElement("h3", null, "Skills"),
        React.createElement("div", { className: "skills-img" },
            React.createElement("img", { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" }),
            React.createElement("img", { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" }),
            React.createElement("img", { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" }),
            React.createElement("img", { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original-wordmark.svg" }),
            React.createElement("img", { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original-wordmark.svg" }),
            React.createElement("img", { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg" }),
            React.createElement("img", { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg" }),
            React.createElement("img", { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original-wordmark.svg" }))));
};
