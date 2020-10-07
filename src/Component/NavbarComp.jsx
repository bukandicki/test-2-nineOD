import React, { Component } from 'react';
import '../scss/master.scss';

class NavbarComponent extends Component {
    render () {
        return (
            <nav className="navbar">
                <a className="navbar-logo" href="">LO</a>
                <ul className="navbar-nav">
                    <li className="navbar-item"><a href="#!">About</a></li>
                    <li className="navbar-item"><a href="#!">Articles</a></li>
                    <li className="navbar-item nav__bordered"><a href="#!">Subscribe</a></li>
                </ul>
                <button className="navbar-collapse-button">
                    <img src="https://www.flaticon.com/svg/static/icons/svg/566/566020.svg" alt="" srcset=""/>
                </button>
            </nav>
        )
    }
}

export default NavbarComponent;