import React, { Component } from 'react';
import '../scss/master.scss';

class FooterComponent extends Component {
    render () {
        return (
            <footer className="footer">
                <ul className="footer-navbar">
                    <li className="navbar-item"><a href="#!">About</a></li>
                    <li className="navbar-item"><a href="#!">Articles</a></li>
                    <li className="navbar-item"><a href="#!">Subscribe</a></li>
                </ul>
                <ul className="footer-social-media">
                    <li><img src="https://www.flaticon.com/svg/static/icons/svg/2111/2111491.svg" alt="" srcset=""/></li>
                    <li><img src="https://www.flaticon.com/svg/static/icons/svg/2111/2111738.svg" alt="" srcset=""/></li>
                    <li><img src="https://www.flaticon.com/svg/static/icons/svg/2111/2111392.svg" alt="" srcset=""/></li>
                    <li><img src="https://www.flaticon.com/svg/static/icons/svg/2111/2111601.svg" alt="" srcset=""/></li>
                </ul>
            </footer>
        )
    }
}

export default FooterComponent;