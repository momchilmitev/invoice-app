import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore/lite';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyAZUqjYLxzJWfGkjlpS7BK_DwjHfCh0ewY',
  authDomain: 'invoice-app-214ba.firebaseapp.com',
  projectId: 'invoice-app-214ba',
  storageBucket: 'invoice-app-214ba.appspot.com',
  messagingSenderId: '583597045386',
  appId: '1:583597045386:web:26dcc00504e4e0a55d1f73',
  measurementId: 'G-4JHZTLSMY1',
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();
