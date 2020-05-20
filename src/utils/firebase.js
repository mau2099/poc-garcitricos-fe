import firebase from 'firebase/app';
import 'firebase/auth';
// import dotenv from 'dotenv';

// dotenv.config();
// const config = {
//   apiKey: process.env.API_KEY,
//   authDomain: process.env.AUTH_DOMAIN,
//   databaseURL: process.env.DATABASE_URL,
//   projectId: process.env.PROJECT_ID,
//   storageBucket: process.env.STORAGE_BUCKET,
//   messagingSenderId: process.env.MESSAGING_SENDER_ID,
//   appId: process.env.APP_ID,
//   measurementId: process.env.MEASUREMENT_ID,
// };
const config = {
  apiKey: 'AIzaSyBygRRKD4hZ5MYnUbsBUt16QYoftzDmQ5g',
  authDomain: 'garcitricos-f8524.firebaseapp.com',
  databaseURL: 'https://garcitricos-f8524.firebaseio.com',
  projectId: 'garcitricos-f8524',
  storageBucket: 'garcitricos-f8524.appspot.com',
  messagingSenderId: '325883639272',
  appId: '1:325883639272:web:457102ca2e9e5b527fe05d',
  measurementId: 'G-0SE7VE0E6C',
};

firebase.initializeApp(config);
export const { auth } = firebase;
export const googleProvider = new firebase.auth.GoogleAuthProvider();
export const emailProvider = new firebase.auth.EmailAuthProvider();
