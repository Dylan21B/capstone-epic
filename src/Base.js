import Rebase from 're-base';
import firebase from 'firebase';

var config = {
    apiKey: "AIzaSyCcMAFip5q0dQRPVujqasFj6qCVt0EDckU",
    authDomain: "capstone-grid-locations.firebaseapp.com",
    databaseURL: "https://capstone-grid-locations.firebaseio.com"

  };


const app = firebase.initializeApp(config);

export const rebase = Rebase.createClass(app.database());
