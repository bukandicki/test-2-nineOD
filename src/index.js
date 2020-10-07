import React from 'react';
import ReactDOM from 'react-dom';
import AboutComp from './Component/AboutComp';
import ArticlesComp from './Component/ArticlesComp';
import FooterComponent from './Component/FooterComp';
import MainJumboTron from './Component/MainJumbotronCom';
import NewsletterComp from './Component/SubscribeComp';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <MainJumboTron />
    <ArticlesComp />
    <AboutComp />
    <NewsletterComp />
    <FooterComponent />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
