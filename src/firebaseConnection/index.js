import firebase from "firebase/app";
import  'firebase/database'


const firebaseConfig = {
  apiKey: "AIzaSyB1yRyk4KmKGlWnpJPMPOC82KszTLNC2W8",
  authDomain: "teste-df8c0.firebaseapp.com",
  databaseURL: "https://teste-df8c0-default-rtdb.firebaseio.com",
  projectId: "teste-df8c0",
  storageBucket: "teste-df8c0.appspot.com",
  messagingSenderId: "134038433855",
  appId: "1:134038433855:web:fdd54e18753d73c835888a",
  measurementId: "G-X69GWMPNVW"
};

if (!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
}
export default firebase;