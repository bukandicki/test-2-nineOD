import React, { Component } from 'react';
import '../scss/master.scss';

const ArticlesCardComp = (props) => {
    return (
        <div className="articles-card">
            <div className="articles-image">
                <img src={props.imagecard} alt="" srcset="" />
            </div>
            <div className="articles-body">
                <h3>{props.articlestext}</h3>
            </div>
        </div>
    )
}

export default ArticlesCardComp;