// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyC7GACBh_u0E8sjo2l0erd1XO2_WN8k_eY",
    authDomain: "todo-list-8cea0.firebaseapp.com",
    projectId: "todo-list-8cea0",
    storageBucket: "todo-list-8cea0.appspot.com",
    messagingSenderId: "649378065919",
    appId: "1:649378065919:web:1b1640ecd4c1f0b0a7cbca",
    measurementId: "G-PJJSDR08TN"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  var db = firebase.firestore();