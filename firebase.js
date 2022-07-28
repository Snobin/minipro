// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
import firestore from '@react-native-firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBJTT3ePEtGEO52RX4Bq8YGx_dExlzGw5k",
  authDomain: "campox-441d8.firebaseapp.com",
  projectId: "campox-441d8",
  storageBucket: "campox-441d8.appspot.com",
  messagingSenderId: "793540439899",
  appId: "1:793540439899:web:87cf5b5177dc95df86b47e"
};


// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app()
}

const auth = firebase.auth()
//const firestore = getFirestore();

export { auth ,firestore};