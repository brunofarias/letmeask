import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyAxnpGsYgYmSBsRNzqDEYJVU3J9AeS4F9M",
  authDomain: "letmeask-95e2b.firebaseapp.com",
  databaseURL: "https://letmeask-95e2b-default-rtdb.firebaseio.com",
  projectId: "letmeask-95e2b",
  storageBucket: "letmeask-95e2b.appspot.com",
  messagingSenderId: "263034144151",
  appId: "1:263034144151:web:c1752b4cc5ad963e94f0d2"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const database = firebase.database();