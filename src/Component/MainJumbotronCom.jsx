import React, { Component } from 'react';
import '../scss/master.scss';
import NavbarComponent from './NavbarComp';

class MainJumboTron extends Component {
    render() {
        return (
            <section className="jumbotron-container">
                <NavbarComponent />
                <div className="jumbotron">
                    <img className="jumbotron-image" src="https://images.unsplash.com/photo-1487700160041-babef9c3cb55?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=735&q=80" alt="" srcset=""/>
                    <div className="jumbotron-title-container">
                        <h1 className="jumbotron-title">lombok</h1>
                        <span className="jumbotron-sub-title">holistic healt</span>
                    </div>
                </div>
            </section>
        )
    }
}

export default MainJumboTron;