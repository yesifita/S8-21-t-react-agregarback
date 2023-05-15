import { FirebaseOptions, initializeApp } from 'firebase/app';
import { getDatabase } from "firebase/database";

const firebaseConfig:FirebaseOptions = {
  apiKey: "AIzaSyBBwPQSn6B9SLz4Hoc9RBV9XiQsU8ANi8w",
  authDomain: "s8-21-t-react-agregarback.firebaseapp.com",
  projectId: "s8-21-t-react-agregarback",
  storageBucket: "s8-21-t-react-agregarback.appspot.com",
  messagingSenderId: "283197585075",
  appId: "1:283197585075:web:47b4122a9888e98837e2c6"
};

const app = initializeApp(firebaseConfig);


export const database = getDatabase(app);
