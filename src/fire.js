import firebase from 'firebase'
var config = {
    apiKey: "AIzaSyBv1UBV9PtzavhDOphLg16WXxGzDFJbKcI",
    authDomain: "interview-5fae6.firebaseapp.com",
    databaseURL: "https://interview-5fae6.firebaseio.com",
    projectId: "interview-5fae6",
    storageBucket: "interview-5fae6.appspot.com",
    messagingSenderId: "265795474933"
  };
  var fire=firebase.initializeApp(config);
export default fire;