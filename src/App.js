import './App.css';
import React from "react";
import Navigation from './components/Navigation';
// import Content from './components/Content';
function App() {
    return (React.createElement("div", { className: 'Background' },
        React.createElement(Navigation, null)));
}
export default App;
