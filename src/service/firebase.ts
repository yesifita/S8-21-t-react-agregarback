import { FirebaseOptions, initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

const firebaseConfig: FirebaseOptions = {
  apiKey: 'AIzaSyBBwPQSn6B9SLz4Hoc9RBV9XiQsU8ANi8w',
  authDomain: 's8-21-t-react-agregarback.firebaseapp.com',
  databaseURL: 'https://s8-21-t-react-agregarback-default-rtdb.firebaseio.com',
  projectId: 's8-21-t-react-agregarback',
  storageBucket: 's8-21-t-react-agregarback.appspot.com',
  messagingSenderId: '283197585075',
  appId: '1:283197585075:web:47b4122a9888e98837e2c6',
}

export const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
export const auth = getAuth(app)
