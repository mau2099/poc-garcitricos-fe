import firebase from 'firebase/app';
import 'firebase/auth';
import { FIREBASE } from '../../googleKeys';

firebase.initializeApp(FIREBASE.config);
export const { auth } = firebase;
export const googleProvider = new firebase.auth.GoogleAuthProvider();
export const emailProvider = new firebase.auth.EmailAuthProvider();
