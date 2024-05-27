import React from "react";
import AboutInfo from "../aboutInfo/aboutInfo";

import './sectionAbout.css'

const aboutData = [
    {
        src: "./images/icon-online.svg",
        title: "Online Banking",
        description: "Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.",
    },
    {
        src: "./images/icon-budgeting.svg",
        title: "Simple Budgeting",
        description: "See exactly where your money goes each month. Receive notifications when you’re close to hitting your limits.",
    },
    {
        src: "./images/icon-onboarding.svg",
        title: "Fast Onboarding",
        description: "We don’t do branches. Open your account in minutes online and start taking control of your finances right away.",
    },
    {
        src: "./images/icon-api.svg",
        title: "Open API",
        description: "Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.",
    },
]

const SectionAbout = () => {
    return (
        <section className="about">
            <div className="about-content">
                <h2 className="title">Why choose Easybank?</h2>
                <p className="description">We leverage Open Banking to turn your bank account into your financial hub. Control
                    your finances like never before.</p>
                <div className="infos">
                    {
                        aboutData.map((item, index)=> {
                            return(
                                <AboutInfo 
                                    key={index}
                                    src={item.src}
                                    title={item.title}
                                    description={item.description}
                                />
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default SectionAbout