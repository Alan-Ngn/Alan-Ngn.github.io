"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("./App.css");
const react_1 = __importDefault(require("react"));
const Navigation_1 = __importDefault(require("./components/Navigation"));
// import Content from './components/Content';
function App() {
    return (react_1.default.createElement("div", { className: 'Background' },
        react_1.default.createElement(Navigation_1.default, null)));
}
exports.default = App;
