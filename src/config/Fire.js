import firebase from "firebase";

const config = {
  apiKey: "AIzaSyCnZUngvfvS0AaP694Pvsyl0J_OKymFd4c",
  authDomain: "teachirp.firebaseapp.com",
  databaseURL: "https://teachirp.firebaseio.com",
  projectId: "teachirp",
  storageBucket: "teachirp.appspot.com",
  messagingSenderId: "1011919166886"
};
const fire = firebase.initializeApp(config);

export default fire;
