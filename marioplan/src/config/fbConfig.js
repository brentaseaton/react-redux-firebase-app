import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDVz-G3B1RBxU5hSfq9SfEu01g5LhPvRcM",
  authDomain: "planner-5b71f.firebaseapp.com",
  databaseURL: "https://planner-5b71f.firebaseio.com",
  projectId: "planner-5b71f",
  storageBucket: "planner-5b71f.appspot.com",
  messagingSenderId: "1030268934178",
  appId: "1:1030268934178:web:cf11d5660df5d1db"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig)

export default firebase