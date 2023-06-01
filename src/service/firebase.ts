import { FirebaseOptions, initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { collection, getDocs, getFirestore } from "firebase/firestore";
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

const app = initializeApp(firebaseConfig);
const firestoreDB = getFirestore(app);
export const database = getDatabase(app);
export default firestoreDB;
export const db = getFirestore(app)
export const auth = getAuth(app)

export const getCollections = async (name: string) => {
  const colecciones = collection(firestoreDB, name);
  const products = await getDocs(colecciones);
  return products.docs.map((doc) => {
    return {
      ...doc.data(),
      id: doc.id,
    };
  });
};



