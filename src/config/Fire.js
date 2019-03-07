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

const provider = new firebase.auth.GoogleAuthProvider();

export const signInWithGoogle = () => {
  firebase
    .auth()
    .signInWithPopup(provider)
    .then(res => {})
    .catch(res => {});
};

export const signOut = () => {
  firebase
    .auth()
    .signOut()
    .then(res => {})
    .catch(res => {});
};

export default fire;
