import firebase from 'firebase';

require('@firebase/firestore');

var firebaseConfig = {
    apiKey: "AIzaSyBz0sPiRSdTgCQKjkCyK13OPPUbE3VcAIA",
    authDomain: "bartersystemapp-9bb27.firebaseapp.com",
    projectId: "bartersystemapp-9bb27",
    storageBucket: "bartersystemapp-9bb27.appspot.com",
    messagingSenderId: "263577878777",
    appId: "1:263577878777:web:ebc39bfbd4ae669615a228"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export default firebase.firestore();