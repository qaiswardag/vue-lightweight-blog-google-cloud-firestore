import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyB4UNtLm1gG-_afnSj5BpIPxK41F4cKwJQ',
  authDomain: 'teach-firebase-and-firestore.firebaseapp.com',
  projectId: 'teach-firebase-and-firestore',
  storageBucket: 'teach-firebase-and-firestore.appspot.com',
  messagingSenderId: '326075475560',
  appId: '1:326075475560:web:68503f6b0602f9fb5d7ddd',
};

// init firebase
firebase.initializeApp(firebaseConfig);

// init firestore service
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectFirestore, timestamp };
