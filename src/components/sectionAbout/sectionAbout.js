import React from "react";
import online from '../../images/icon-online.svg'
import budgeting from '../../images/icon-budgeting.svg'
import onboarding from '../../images/icon-onboarding.svg'
import api from '../../images/icon-api.svg'

import './sectionAbout.css'

const SectionAbout = () => {
    return (
        <section className="about">
            <div className="about-content">
                <h2 className="title">Why choose Easybank?</h2>
                <p className="description">We leverage Open Banking to turn your bank account into your financial hub. Control
                    your finances like never before.</p>
                <div className="infos">
                    <div className="info">
                        <img src={online} alt="online"></img>
                        <h3 className="info-title">Online Banking</h3>
                        <p className="info-description">Our modern web and mobile applications allow you to keep track of your finances
                            wherever you are in the world.</p>
                    </div>
                    <div className="info">
                        <img src={budgeting} alt="budgeting"></img>
                        <h3 className="info-title">Simple Budgeting</h3>
                        <p className="info-description">See exactly where your money goes each month. Receive notifications when you’re
                            close to hitting your limits.</p>
                    </div>
                    <div className="info">
                        <img src={onboarding} alt="onboarding"></img>
                        <h3 className="info-title">Fast Onboarding</h3>
                        <p className="info-description">We don’t do branches. Open your account in minutes online and start taking control
                            of your finances right away.</p>
                    </div>
                    <div className="info">
                        <img src={api} alt="api"></img>
                        <h3 className="info-title">Open API</h3>
                        <p className="info-description">Manage your savings, investments, pension, and much more from one account. Tracking
                            your money has never been easier.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SectionAbout