import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBwJ-cRcvDgAywdiHvoTMNFYTOUUYAhsAA",
  authDomain: "fooddeliveryapp-97720.firebaseapp.com",
  databaseURL: "https://fooddeliveryapp-97720-default-rtdb.firebaseio.com",
  projectId: "fooddeliveryapp-97720",
  storageBucket: "fooddeliveryapp-97720.appspot.com",
  messagingSenderId: "1029744542941",
  appId: "1:1029744542941:web:2ef922d881ff9c070a4734",
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);
const firestore = getStorage(app);
const storage = getStorage(app);

export { app, firestore, storage };
