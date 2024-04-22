import React from "react";
import logo from '../../images/logo.svg'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="logo-social">
                    <a href="/">
                        <img src={logo} alt="logo"></img>
                    </a>

                    <ul className="social">
                        <li><a href="/"><i className="fa-brands fa-square-facebook"></i></a></li>
                        <li><a href="/"><i className="fa-brands fa-youtube"></i></a></li>
                        <li><a href="/"><i className="fa-brands fa-twitter"></i></a></li>
                        <li><a href="/"><i className="fa-brands fa-pinterest"></i></a></li>
                        <li><a href="/"><i className="fa-brands fa-instagram"></i></a></li>
                    </ul>
                </div>
                <ul className="links">
                    <li><a href="/">About Us</a></li>
                    <li><a href="/">Contact</a></li>
                    <li><a href="/">Blog</a></li>
                </ul>
                <ul className="links">
                    <li><a href="/">Careers</a></li>
                    <li><a href="/">Support</a></li>
                    <li><a href="/">Privacy Policy</a></li>
                </ul>
                <div className="button-rights">
                    <a className="request" href="/">Request Invite</a>

                    <p className="rights">© Easybank. All Rights Reserved</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer