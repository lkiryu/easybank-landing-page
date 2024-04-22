import React from "react";
import logo from '../../images/logo.svg'

const Header = () => {
    return(
        <header className="header">
            <a href="/">
                <img src={logo} alt="logo"></img>
            </a>

            <nav>
                <ul className="nav-list">
                    <li className="nav-link"><a href="/">Home</a></li>
                    <li className="nav-link"><a href="/">About</a></li>
                    <li className="nav-link"><a href="/">Contact</a></li>
                    <li className="nav-link"><a href="/">Blog</a></li>
                    <li className="nav-link"><a href="/">Careers</a></li>
                </ul>
            </nav>

            <a className="request" href="/">Request Invite</a>
        </header>
    )
}

export default Header