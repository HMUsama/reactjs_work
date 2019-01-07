import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth' 


// Initialize Firebase
var config = {
    apiKey: "AIzaSyBaTAwhwC0JNDFJkS1RTCpdQNEu00dVpmc",
    authDomain: "onlineearning-766c6.firebaseapp.com",
    databaseURL: "https://onlineearning-766c6.firebaseio.com",
    projectId: "onlineearning-766c6",
    storageBucket: "onlineearning-766c6.appspot.com",
    messagingSenderId: "933299412391"
  };
  firebase.initializeApp(config);
  firebase.firestore().settings({ timestampsInSnapshots:true })


  export default firebase;