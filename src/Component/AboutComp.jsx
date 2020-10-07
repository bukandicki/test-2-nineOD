import React, { Component } from 'react';
import '../scss/master.scss';

class AboutComp extends Component {
    render() {
        return (
            <section className="about">
                <div className="about-container">
                    <div className="about-content">
                        <h3>About</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi quas doloribus minus ab praesentium quam et consectetur distinctio cumque? Earum maxime illo doloremque nesciunt amet, architecto laboriosam, ab praesentium quam et consectetur reprehenderit ducimus modi, quas labore.ipsum dolor sit amet consectetur adipisicing elit. Excepturi consectetur quas doloribus minu</p>
                    </div>
                    <div className="about-image">
                        <img src="https://images.unsplash.com/photo-1535797173037-95f3e5ab979e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80" alt="" srcset=""/>
                    </div>
                </div>
            </section>
        )
    }
}

export default AboutComp;