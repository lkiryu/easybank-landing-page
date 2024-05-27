import React from "react";

const Article = (prop) => {
    return (
        <div className="article">
            <img src={prop.src} alt={prop.title}></img>
            <div className="info">
                <p className="article-author">By {prop.author}</p>
                <a className="article-title" href={prop.href}>{prop.title}</a>
                <p className="article-description">{prop.description}</p>
            </div>
        </div>
    )
}

export default Article