import React from "react";
import cellphones from '../../images/image-mockups.png'

import './sectionIntro.css'

const SectionIntro = () => {
    return (
        <section className="intro">
            <div className="intro-content">
                <div className="info">
                    <h1 className="title">Next generation digital banking</h1>
                    <p className="description">Take your financial life online. Your Easybank account will be a one-stop-shop
                        for spending, saving, budgeting, investing, and much more.</p>
                    <a className="request" href="/">Request Invite</a>
                </div>
                <img src={cellphones} alt="cellphones"></img>
            </div>
        </section>
    )
}

export default SectionIntro