import { useModal } from "../../context/modal";
import React from 'react';
import "./chest.css";
export const ChestModal = () => {
    const { closeModal } = useModal();
    return (React.createElement("div", { className: "contacts" },
        React.createElement("button", { className: "contact-close-button", onClick: closeModal },
            React.createElement("i", { className: "fa-regular fa-rectangle-xmark" })),
        React.createElement("p", null, "Let's connect, collaborate, and build amazing software together!"),
        React.createElement("div", { className: "resume-download" },
            React.createElement("img", { className: 'resume', src: process.env.PUBLIC_URL + '/Resume.PNG' }),
            React.createElement("div", { className: "download-icon" },
                React.createElement("a", { href: process.env.PUBLIC_URL + '/Alan Nguyen - Software Engineer Resume.pdf', target: "_blank" },
                    React.createElement("i", { className: "fa-solid fa-arrow-up-right-from-square" })),
                React.createElement("a", { className: 'resume-icon', href: process.env.PUBLIC_URL + '/Alan Nguyen - Software Engineer Resume.pdf', download: process.env.PUBLIC_URL + '/Alan Nguyen - Software Engineer Resume.pdf' },
                    React.createElement("i", { className: "fa-solid fa-file-arrow-down" })))),
        React.createElement("div", { className: "contacts-links" },
            React.createElement("a", { href: "https://github.com/Alan-Ngn", rel: "noreferrer", target: "_blank" },
                React.createElement("i", { className: "fa-brands fa-github" })),
            React.createElement("a", { href: "https://www.linkedin.com/in/alannguyen21", rel: "noreferrer", target: "_blank" },
                React.createElement("i", { className: "fa-brands fa-linkedin" })),
            React.createElement("a", { href: "https://wellfound.com/u/alan-nguyen-31", rel: "noreferrer", target: "_blank" },
                React.createElement("i", { className: "fa-brands fa-angellist" })),
            React.createElement("a", { href: "mailto:alanngn21@gmail.com", target: "_blank" },
                React.createElement("i", { className: "fa-solid fa-envelope" })))));
};
// export default ChestModal
