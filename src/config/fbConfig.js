import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

var firebaseConfig = {
    apiKey: "AIzaSyCctKDj2OgyhwBDm8y5DvjYxvz0E6HLwT8",
    authDomain: "mario-plan-1a6f8.firebaseapp.com",
    databaseURL: "https://mario-plan-1a6f8.firebaseio.com",
    projectId: "mario-plan-1a6f8",
    storageBucket: "mario-plan-1a6f8.appspot.com",
    messagingSenderId: "491905953126",
    appId: "1:491905953126:web:d4568dba06cc7e8628aca7",
    measurementId: "G-0EP285ZV3Q"
};

firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase 