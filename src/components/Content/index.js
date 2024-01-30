"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("./content.css");
const react_1 = __importDefault(require("react"));
function Content() {
    // const chatClassName = "talk-bubble tri-right left-in" + (transform.x !== 20 || transform.y !== 0 ? " hide" : "")
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("div", { className: "profile-pic" },
            react_1.default.createElement("img", { className: 'frame', src: process.env.PUBLIC_URL + '/frame.png' }),
            react_1.default.createElement("img", { className: 'profile', src: process.env.PUBLIC_URL + '/profile.png' }))));
}
exports.default = Content;
