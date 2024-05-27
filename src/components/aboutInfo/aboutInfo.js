import React from "react";

const AboutInfo = (prop) => {
    return (
        <div className="info">
            <img src={prop.src} alt={prop.title}></img>
            <h3 className="info-title">{prop.title}</h3>
            <p className="info-description">{prop.description}</p>
        </div>
    )
}

export default AboutInfo