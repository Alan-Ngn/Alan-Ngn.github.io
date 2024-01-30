import { useModal } from "../../context/modal";
import "./wizardModal.css";
import React from 'react';
export const WizardModal = () => {
    const { closeModal } = useModal();
    const openLiveLink = () => {
        window.open("https://gibberish-z0ju.onrender.com", "_blank");
    };
    const openGithub = () => {
        window.open("https://github.com/Alan-Ngn/Gibberish", "_blank");
    };
    return (React.createElement("article", { className: "Project" },
        React.createElement("button", { className: "close-button", onClick: closeModal },
            React.createElement("i", { className: "fa-regular fa-rectangle-xmark" })),
        React.createElement("div", { className: "image-link" },
            React.createElement("img", { className: 'GibberishSplash', src: process.env.PUBLIC_URL + '/GibberishSplashPage.PNG' }),
            React.createElement("div", { className: "link-github-icon" },
                React.createElement("a", { href: "https://gibberish-z0ju.onrender.com", rel: "noreferrer", target: "_blank" },
                    React.createElement("i", { className: "fa-solid fa-arrow-up-right-from-square" })),
                React.createElement("a", { href: "https://github.com/Alan-Ngn/Gibberish", rel: "noreferrer", target: "_blank" },
                    React.createElement("i", { className: "fa-brands fa-github" })))),
        React.createElement("h3", null, "Gibberish"),
        React.createElement("p", null, "Gibberish is a Slack-inspired website that utilizes JavaScript, React, Redux, Python, Flask, SQLAlchemy, SocketIO, HTML, and CSS. It integrates real-time communication through sockets for all CRUD operations and optimizes rendering by building relationships with multiple tables and utilizing one reducer."),
        React.createElement("h3", null, "Skills"),
        React.createElement("div", { className: "skills-img" },
            React.createElement("img", { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" }),
            React.createElement("img", { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original-wordmark.svg" }),
            React.createElement("img", { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" }),
            React.createElement("img", { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" }),
            React.createElement("img", { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original-wordmark.svg" }),
            React.createElement("img", { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg" }),
            React.createElement("img", { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg" }),
            React.createElement("img", { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original-wordmark.svg" }),
            React.createElement("img", { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlalchemy/sqlalchemy-original-wordmark.svg" }),
            React.createElement("img", { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/socketio/socketio-original-wordmark.svg" }))));
};
// export default WizardModal
