import * as firebase from "firebase/app";
firebase.initializeApp ( {
    apiKey: "AIzaSyAqgnHG58TJwd5ZaCbCSWwchPEWFlyThIE",
    authDomain: "footprintway.firebaseapp.com",
    databaseURL: "https://footprintway-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "footprintway",
    storageBucket: "footprintway.appspot.com",
    messagingSenderId: "705745529125",
    appId: "1:705745529125:web:4872c408f265f5c77cd2cc",
    measurementId: "G-QWL5XF7E6T"
  });
  

  console.log(firebase);

  var database = firebase.database();
  var ref= database.ref('dicas');

  var data = {
      dicadodia: "dicadodia5",
      descricao: "Recolher agua"
  }

  ref.push(data);