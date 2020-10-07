import React, { Component } from 'react';
import '../scss/master.scss';
import ArticlesCardComp from './ArticlesCardComp';

class ArticlesComp extends Component {
    render() {
        return (
            <section className="articles">
                <h1 className="articles-title">Lastest Articles</h1>
                <div className="articles-wrapper">
                    <ArticlesCardComp imagecard="https://images.unsplash.com/photo-1522069394066-326005dc26b2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80" articlestext="How to use mindfullness in your everyday life"/>
                    <ArticlesCardComp imagecard="https://images.unsplash.com/photo-1568205620890-01e26ed8118b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=751&q=80" articlestext="How to use mindfullness in your everyday life"/>
                    <ArticlesCardComp imagecard="https://images.unsplash.com/photo-1573820213805-b5146042cc49?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=667&q=80" articlestext="How to use mindfullness in your everyday life"/>
                </div>
            </section>
        )
    }
}

export default ArticlesComp;