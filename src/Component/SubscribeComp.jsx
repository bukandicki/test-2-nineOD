import React, { Component } from 'react';
import '../scss/master.scss';

class NewsletterComp extends Component {
    render() {
        return (
            <section className="newsletter">
                <div className="newsletter-container">
                    <div className="newsletter-title">
                        <h2>subscribe</h2>
                        <span>Sign-up to our newsletter</span>
                    </div>
                    <div className="newsletter-form">
                        <form action="">
                            <input type="text" placeholder="Your email" />
                            <button>Submit</button>
                        </form>
                    </div>
                </div>
            </section>
        )
    }
}

export default NewsletterComp;