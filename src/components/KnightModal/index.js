import { useModal } from "../../context/modal";
import React from 'react';
import "./knightModal.css";
export const KnightModal = () => {
    const { closeModal } = useModal();
    const openLiveLink = () => {
        window.open("https://mango-music-4c4k.onrender.com", "_blank");
    };
    const openGithub = () => {
        window.open("https://github.com/Mango-WorldWide/Mango-Music", "_blank");
    };
    return (React.createElement("article", { className: "Project" },
        React.createElement("button", { className: "close-button", onClick: closeModal },
            React.createElement("i", { className: "fa-regular fa-rectangle-xmark" })),
        React.createElement("div", { className: "image-link" },
            React.createElement("img", { className: 'MangoSplash', src: process.env.PUBLIC_URL + '/MangoMusicThumb.PNG' }),
            React.createElement("div", { className: "link-github-icon" },
                React.createElement("a", { href: "https://mango-music-4c4k.onrender.com", rel: "noreferrer", target: "_blank" },
                    React.createElement("i", { className: "fa-solid fa-arrow-up-right-from-square" })),
                React.createElement("a", { href: "https://github.com/Mango-WorldWide/Mango-Music", rel: "noreferrer", target: "_blank" },
                    React.createElement("i", { className: "fa-brands fa-github" })))),
        React.createElement("h3", null, "Mango Music"),
        React.createElement("p", null, "Mango Music draws inspiration from Apple Music and employs JavaScript, React, Redux, Python, Flask, SQLAlchemy, AWS S3, HTML, and CSS. It features a persistent global player, and an integration with AWS S3 for storing and serving .mp4 files."),
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
            React.createElement("img", { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" }))));
};
