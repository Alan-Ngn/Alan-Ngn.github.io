"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChestModal = void 0;
const modal_1 = require("../../context/modal");
const react_1 = __importDefault(require("react"));
require("./chest.css");
const ChestModal = () => {
    const { closeModal } = (0, modal_1.useModal)();
    return (react_1.default.createElement("div", { className: "contacts" },
        react_1.default.createElement("button", { className: "contact-close-button", onClick: closeModal },
            react_1.default.createElement("i", { className: "fa-regular fa-rectangle-xmark" })),
        react_1.default.createElement("p", null, "Let's connect, collaborate, and build amazing software together!"),
        react_1.default.createElement("div", { className: "resume-download" },
            react_1.default.createElement("img", { className: 'resume', src: process.env.PUBLIC_URL + '/Resume.PNG' }),
            react_1.default.createElement("div", { className: "download-icon" },
                react_1.default.createElement("a", { href: process.env.PUBLIC_URL + '/Alan Nguyen - Software Engineer Resume.pdf', target: "_blank" },
                    react_1.default.createElement("i", { className: "fa-solid fa-arrow-up-right-from-square" })),
                react_1.default.createElement("a", { className: 'resume-icon', href: process.env.PUBLIC_URL + '/Alan Nguyen - Software Engineer Resume.pdf', download: process.env.PUBLIC_URL + '/Alan Nguyen - Software Engineer Resume.pdf' },
                    react_1.default.createElement("i", { className: "fa-solid fa-file-arrow-down" })))),
        react_1.default.createElement("div", { className: "contacts-links" },
            react_1.default.createElement("a", { href: "https://github.com/Alan-Ngn", rel: "noreferrer", target: "_blank" },
                react_1.default.createElement("i", { className: "fa-brands fa-github" })),
            react_1.default.createElement("a", { href: "https://www.linkedin.com/in/alannguyen21", rel: "noreferrer", target: "_blank" },
                react_1.default.createElement("i", { className: "fa-brands fa-linkedin" })),
            react_1.default.createElement("a", { href: "https://wellfound.com/u/alan-nguyen-31", rel: "noreferrer", target: "_blank" },
                react_1.default.createElement("i", { className: "fa-brands fa-angellist" })),
            react_1.default.createElement("a", { href: "mailto:alanngn21@gmail.com", target: "_blank" },
                react_1.default.createElement("i", { className: "fa-solid fa-envelope" })))));
};
exports.ChestModal = ChestModal;
// export default ChestModal
