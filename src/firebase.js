import firebase from 'firebase'


const firebaseConfig = {
    apiKey: "AIzaSyBbN8IWaz_MJk6IiwfIyT88Q_UrhIfEAsA",
    authDomain: "linkedin-clone-3f83d.firebaseapp.com",
    projectId: "linkedin-clone-3f83d",
    storageBucket: "linkedin-clone-3f83d.appspot.com",
    messagingSenderId: "202258966238",
    appId: "1:202258966238:web:81fa23492214fdc304844f"
  }

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()

export { db, auth }