import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import firebase from 'firebase';

var config = {
    apiKey: "AIzaSyCcMAFip5q0dQRPVujqasFj6qCVt0EDckU",
    authDomain: "capstone-grid-locations.firebaseapp.com",
    databaseURL: "https://capstone-grid-locations.firebaseio.com",
    projectId: "capstone-grid-locations",
    storageBucket: "capstone-grid-locations.appspot.com",
    messagingSenderId: "158676070497"
  };


firebase.initializeApp(config);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
