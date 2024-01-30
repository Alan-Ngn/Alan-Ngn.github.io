"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useTransform = exports.TransformContext = void 0;
const react_1 = __importStar(require("react"));
exports.TransformContext = (0, react_1.createContext)(undefined);
const useTransform = () => {
    const context = (0, react_1.useContext)(exports.TransformContext);
    if (!context) {
        throw new Error("useTransform must be used within a TransformProvider");
    }
    return context;
};
exports.useTransform = useTransform;
const TransformProvider = ({ children }) => {
    const [transform, setTransform] = (0, react_1.useState)({ x: 20, y: 1180 });
    const [start, setStart] = (0, react_1.useState)("start-bubble talk-bubble tri-right left-in");
    const [scroll, setScroll] = (0, react_1.useState)("hide");
    const [knight, setKnight] = (0, react_1.useState)("hide");
    const [wizard, setWizard] = (0, react_1.useState)("hide");
    const [dragon, setDragon] = (0, react_1.useState)("hide");
    const [chest, setChest] = (0, react_1.useState)("hide");
    return (react_1.default.createElement(exports.TransformContext.Provider, { value: { transform, setTransform, start, setStart, scroll, setScroll, knight, setKnight, wizard, setWizard, dragon, setDragon, chest, setChest } }, children));
};
exports.default = TransformProvider;
