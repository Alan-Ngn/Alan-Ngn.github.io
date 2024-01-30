import "./content.css";
import React from 'react';
function Content() {
    // const chatClassName = "talk-bubble tri-right left-in" + (transform.x !== 20 || transform.y !== 0 ? " hide" : "")
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: "profile-pic" },
            React.createElement("img", { className: 'frame', src: process.env.PUBLIC_URL + '/frame.png' }),
            React.createElement("img", { className: 'profile', src: process.env.PUBLIC_URL + '/profile.png' }))));
}
export default Content;
