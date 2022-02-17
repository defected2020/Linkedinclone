import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBRLMlqX0QgiR0Lue5X_ugxeaciRg4ERlo",
  authDomain: "linkedinclone-3d759.firebaseapp.com",
  projectId: "linkedinclone-3d759",
  storageBucket: "linkedinclone-3d759.appspot.com",
  messagingSenderId: "791724644711",
  appId: "1:791724644711:web:0f769e81fdbd3a378ff7c2",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
